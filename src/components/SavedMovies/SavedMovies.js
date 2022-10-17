import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

    return (
        <section className='content saved-movies'>
            <SearchForm />
            <MoviesCardList />
        </section>
    )
};

export default SavedMovies;