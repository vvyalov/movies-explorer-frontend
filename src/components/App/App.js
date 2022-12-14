import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [isPopupOpened, setPopupOpen] = React.useState(false);

  function handleBurgerButtonClick() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  return (
    <div className="page">
      <Header loggedIn={loggedIn}  onButtonClick={ handleBurgerButtonClick }/>
      <Popup isOpened={ isPopupOpened }onButtonClick={ closePopup } />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/nodfound">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
