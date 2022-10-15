import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ nextMovie }) {
    nextMovie = true;
    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList isNextMovie={nextMovie} />
        </section>
    )
};

export default Movies;