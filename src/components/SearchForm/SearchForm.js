import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    return (
        <section className='search-form'>
            <form className='search-form__container-search'>
                <input type='search' required className='search-form__input' placeholder='Фильм'></input>
                <span className='search-form__input-decoration'></span>
                <button type='submit' className='link search-form__button' />
            </form>
            <FilterCheckbox />
        </section>
    )
};

export default SearchForm;