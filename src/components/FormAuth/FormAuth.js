import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function FormAuth({ nameButton, onSubmit, children, isFormValidity }) {

    return (
        <div className='form-auth__container'>
            <div className='form__header'>
                <Link to="/" className="header__logo-link">
                    <img className="logo" src={logo} alt="Movies Explorer" />
                </Link>
                <h2 className='form__text'>Добро пожаловать!</h2>
            </div>
            <form className='content form-auth' onSubmit={onSubmit}>
                {children}
                <button className='link form-auth__button-submit' type='submit' disabled={!isFormValidity}>{nameButton}</button>
            </form>
        </div>
    )
};

export default FormAuth;