import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import firstFilm from '../../images/one-film.png';
import secondFilm from '../../images/two-film.png';
import thirdFilm from '../../images/three-film.png';

function MoviesCardList({ isNextMovie }) {


    return (
        <section className='movie-card-list'>
            <div className='movie-card-list__movies'>
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
            </div>
            <div className='movie-card-list__open-next-movies'>
                {isNextMovie &&
                    <button type="button" className='movie-card-list__open-next-movies-button'>Ещё</button>
                }
            </div>
        </section>
    )
};

export default MoviesCardList;