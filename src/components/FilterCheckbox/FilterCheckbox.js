import React,  { useState, useCallback, useEffect } from 'react';

function FilterCheckbox({ onChangeFilterCheckbox, isFilterCheckbox }) {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isFilterCheckbox) {
            return setIsChecked(isFilterCheckbox);
        }
        onChangeFilterCheckbox(isChecked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            const { checked } = e.target;
            setIsChecked(checked);
            onChangeFilterCheckbox(checked);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isChecked]
    );

    return (
        <section className='filter-checkbox'>
            <label className='link filter-checkbox__container'>
                <input type='checkbox' checked={isChecked} name='filterCheckbox' className='filter-checkbox__checkbox' onChange={handleInputChange}></input>
                <span className='filter-checkbox__checkbox-decoration'></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </section>
    )
};

export default FilterCheckbox;