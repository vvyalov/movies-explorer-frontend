import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoAuth from '../../images/logo-auth.svg'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
    return (
        <Switch>
            <Route path='/signup'>
                <header className="header header__auth">
                    <Link to='/'><img src={logoAuth} alt="Логотип" className="link logo" /></Link>
                    <h1 className='title__form header__title'>Добро пожаловать!</h1>
                </header>
            </Route>
            <Route path='/signin'>
                <header className="header header__auth">
                    <Link to='/'><img src={logoAuth} alt="Логотип" className="link logo" /></Link>
                    <h1 className='title__form header__title'>Рады видеть!</h1>
                </header>
            </Route>
            <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
                <header className="header">
                    <Link to='/'><img src={logo} alt="Логотип" className="link logo" /></Link>
                    <Navigation loggedIn={loggedIn} />
                </header>
            </Route>
        </Switch>
    )
};

export default Header;
