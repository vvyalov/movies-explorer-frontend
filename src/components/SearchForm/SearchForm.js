import React, { useState, useCallback, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ isFilterCheckbox, onChangeFilterCheckbox, onSearshStringChange, onMoviesSearch, searchStringStorage }) {

    const [searchString, setSearchString] = useState('');
    const [searchStringValid, setSearchStringValid] = useState(false);

    useEffect(() => {
        if (searchStringStorage) {
            setSearchString(searchStringStorage);
        }
    },
        [searchStringStorage]
    );

    const handleInputChange = useCallback(
        (e) => {
            const { value } = e.target;
            setSearchString(value);
            onSearshStringChange(value);
        },
          // eslint-disable-next-line react-hooks/exhaustive-deps
        [searchString, searchStringStorage]
    );

    useEffect(
        function validateInputs() {
            const isSearchStringFilled = searchString.length > 1;
            const isSearchStringValid = isSearchStringFilled;

            setSearchStringValid(isSearchStringValid);
        }, [searchString, searchStringValid]
    )

    const buttonDisabled = !searchStringValid;

    function handleSubmit(e) {
        e.preventDefault();
        onMoviesSearch(searchString);
    }

    return (
        <section className='search-form'>
            <form className='search' onSubmit={handleSubmit}>
                <div className='search-form__container-search'>
                    <input type='search' required className='search-form__input' placeholder='Фильм' onChange={handleInputChange}></input>
                    <span className='search-form__input-decoration'/>
                </div>
                <button type='submit' className='link search-form__button' disabled={buttonDisabled}/>
            </form>
            <FilterCheckbox onChangeFilterCheckbox={onChangeFilterCheckbox} isFilterCheckbox={isFilterCheckbox}/>
        </section>
    )
};

export default SearchForm;