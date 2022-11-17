import React, { useState, useEffect  } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { getAllMovies } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { userApi } from '../../utils/UserApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../../components/Popup/Popup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', _id: '' });
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [searchStringStorage, setSearchStringStorage] = useState('');
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [isShortFilm, setisShortFilm] = useState(false);
  const [isErrorSearchMovies, setIsErrorSearchMovies] = useState(false);
  const [errorRespose, setErrorResponse] = useState(null);
  const [isErrorResposeRegister, setIsErrorResponseRegister] = useState(null);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [isUpdateDone, setIsUpdateDone] = useState(false);
  const noHeaderShown = [
		'/signin',
		'/signup',
		'/404',
	];

  useEffect(() => {
    userApi.getUser()
      .then((userData) => {
        if (userData) {
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [loggedIn, currentUser]);
  
  useEffect(() => {
    if (loggedIn) {
      Promise.all([userApi.getUser(), mainApi.getSavedMovies()])
        .then(([userData, dataSavedMovies]) => {
          console.log(loggedIn, currentUser)
          if (userData) {
            setCurrentUser(userData);
            setMoviesSaved(dataSavedMovies.filter(m => m.owner === userData._id));
            history.push('/movies');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (!localStorage.searchMoviesData) {
      setisShortFilm(true);
      setAllMovies([]);
    } else {
      setAllMovies(JSON.parse(localStorage.searchMoviesData));
      setSearchStringStorage(JSON.parse(localStorage.searchString));
      setFilterCheckbox(JSON.parse(localStorage.searchFilterCheckbox));
    }
  }, []);

  const handleFilterCheckbox = (сhecked) => {
    setFilterCheckbox(сhecked);
    localStorage.setItem('searchFilterCheckbox', JSON.stringify(сhecked));
  };

  const handleSearshStringChange = (searchString) => {
    setSearchStringStorage(searchString);
    localStorage.setItem('searchString', JSON.stringify(searchString));
  };

  function handleBurgerButtonClick() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  const handleSaveAllMovies = () => {
    getAllMovies()
      .then((preMoviesData) => {
        const moviesData = preMoviesData.map((movie) => {
          return {
            nameRU: movie.nameRU || '_',
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            duration: movie.duration,
            movieId: movie.id,
            country: movie.country,
            director: movie.director,
            year: movie.year,
            description: movie.description,
            nameEN: movie.nameEN || '_',
            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          };
        })
        localStorage.setItem('searchMoviesData', JSON.stringify(moviesData));
        setAllMovies(moviesData);
        setisShortFilm(false);
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem('searchMoviesData');
        setIsErrorSearchMovies(true);
      });
  };

  const handlelikeMovie = (movie) => {
    if (!moviesSaved.some(i => i.movieId === movie.movieId)) {
      mainApi.addMovie(movie)
        .then((movieCard) => {
          setMoviesSaved([movieCard, ...moviesSaved])
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  

  const handleDeletelike = (movie) => {
    const movieDeleted = moviesSaved.find((m) => m.movieId === movie.movieId);
    mainApi.deleteSavedMovies(movieDeleted._id)
      .then(() => {
        setMoviesSaved((state) => state.filter((m) => m._id !== movieDeleted._id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    userApi.register({ name, email, password })
      .then((dataUser) => {
        if (dataUser) {
          console.log(dataUser)
          handleLogin({ email, password });
        }
      })
      .catch((err => {
        console.log(err);
        setIsErrorResponseRegister(err);
      }))
  };

  const handleLogin = ({ email, password }) => {
    userApi.login({ email, password })
      .then((res) => {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
      })
      
      .catch((err => {
        console.log(err);
        setErrorResponse(err);
      }))
  };

  const handleSignOut = () => {
    userApi.outLogin()
      .then((message) => {
        localStorage.clear();
        console.log(message);
        setLoggedIn(false);
        setCurrentUser({});
        setSearchStringStorage('')
        history.push('/');
      })
      .catch((err => {
        console.log(err);
      }))
  };

  const handleProfileUpdate = ({ name, email }) => {
    userApi.updateUser({ name, email })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsUpdateDone(true);
      })
      .catch((err => {
        console.log(err);
        setIsUpdateDone(false);
      }))
      .finally(setTimeout(() => {
        setIsUpdateDone(false);
      }, 8000))
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      {useRouteMatch(noHeaderShown)
					? null
					: (<Header loggedIn={loggedIn} onButtonClick={handleBurgerButtonClick}/>)}
      <Popup isOpened={popupOpen} onButtonClick={closePopup}/>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movies={allMovies}
            notFirstSearch={isShortFilm}
            handleSaveAllMovies={handleSaveAllMovies}
            moviesSaved={moviesSaved}
            onLikeMovieClick={handlelikeMovie}
            onChangeFilterCheckbox={handleFilterCheckbox}
            onSearshStringChange={handleSearshStringChange}
            searchStringStorage={searchStringStorage}
            isFilterCheckbox={filterCheckbox}
            isErrorSearchMovies={isErrorSearchMovies}
            onDeleteClick={handleDeletelike}/>
        <ProtectedRoute path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            movies={moviesSaved}
            moviesSaved={moviesSaved}
            onSearshStringChange={handleSearshStringChange}
            onDeleteClick={handleDeletelike}
            isErrorSearchMovies={isErrorSearchMovies}
         />
        <ProtectedRoute path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onOutLogin={handleSignOut}
            onProfileUpdate={handleProfileUpdate}
            isUpdateDone={isUpdateDone}        
        />

        <Route path="/signin">
          <Login onLogin={handleLogin} isErrorRespose={errorRespose}/>
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} isErrorRespose={isErrorResposeRegister}/>
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
