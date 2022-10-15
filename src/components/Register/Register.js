import React from 'react';
import { Link } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth';

function Register() {

    return (
        <>
            {<FormAuth />}
            <p className='register__another'>
                Уже зарегистрированы?
                <span>
                    <Link to='/signin' className='link register__another__link'>
                        Войти
                    </Link>
                </span>
            </p>
        </>
    )
};

export default Register;