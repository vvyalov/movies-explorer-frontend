import React from 'react';
import linkIcon from '../../images/link.svg';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__links'>
                <li className='link portfolio__links-item'>
                    <a href='https://github.com/vvyalov/how-to-learn' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Статичный сайт
                        <span className='portfolio__link-span-icon'>
                            <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                        </span>
                    </a>
                </li>
                <li className='link portfolio__links-item'>
                    <a href='https://vvyalov.github.io/russian-travel/' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Адаптивный сайт
                        <span className='portfolio__link-span-icon'>
                            <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                        </span>
                    </a>
                </li>
                <li className='link portfolio__links-item'>
                    <a href='https://github.com/vvyalov/react-mesto-auth' target="_blank" rel="noopener noreferrer" className='portfolio__link'>Одностраничное приложение
                        <span className='portfolio__link-span-icon'>
                            <img src={linkIcon} alt='Иконка для ссылки' className='portfolio__link-icon' />
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;