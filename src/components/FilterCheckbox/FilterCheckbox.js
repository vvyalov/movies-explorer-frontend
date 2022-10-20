import React from 'react';

function FilterCheckbox() {

    return (
        <section className='filter-checkbox'>
            <label className='link filter-checkbox__container'>
                <input type='checkbox' className='filter-checkbox__checkbox'></input>
                <span className='filter-checkbox__checkbox-decoration'></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </section>
    )
};

export default FilterCheckbox;