import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import firstFilm from '../../images/one-film.png';
import secondFilm from '../../images/two-film.png';
import thirdFilm from '../../images/three-film.png';
import fourthFilm from '../../images/four-film.png';

function MoviesCardList({ isNextMovie }) {

    return (
        <section className='movie-card-list'>
                    <MoviesCard
					name="33 слова о дизайне"
					link={firstFilm}
					length="1ч 17м"
				/>
                <MoviesCard
					name="Киноальманах «100 лет дизайна»"
					link={secondFilm}
					length="1ч 17м"
				/>
                <MoviesCard
					name="В погоне за Бенкси"
					link={thirdFilm}
					length="1ч 17м"
				/>
                <MoviesCard
					name="Бег это свобода"
					link={fourthFilm}
					length="1ч 17м"
				/>
            <div className='movie-card-list__next-movies'>
                {isNextMovie &&
                    <button type="button" className='movie-card-list__next-movies-button'>Ещё</button>
                }
            </div>
        </section>
    )
};

export default MoviesCardList;