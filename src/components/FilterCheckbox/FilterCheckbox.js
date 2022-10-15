import React from 'react';

function FilterCheckbox() {

    return (
        <section className='filter-checkbox'>
            <p className='filter-checkbox__text'>Короткометражки</p>
            <label className='link filter-checkbox__container'>
                <input type='checkbox' className='filter-checkbox__input'></input>
                <span className='filter-checkbox__checkbox-span'></span>
            </label>
        </section>
    )
};

export default FilterCheckbox;