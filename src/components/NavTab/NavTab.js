import React from 'react';

function NavTab() {

    return (
            <nav className='navtab__nav'>
                <a href='#project' className='link navtab__link'>О проекте</a>
                <a href='#techs' className='link navtab__link'>Технологии</a>
                <a href='#aboutMe' className='link navtab__link'>Студент</a>
            </nav>
    )
};

export default NavTab;