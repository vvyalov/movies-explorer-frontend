import React from 'react';

function Techs() {

    return (
        <section className='techs' id='techs'>
            <h2 className='title techs__title'>Технологии</h2>
            <div className='techs__contant'>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__project'>
                <li className='techs__name'>HTML</li>
                <li className='techs__name'>CSS</li>
                <li className='techs__name'>JS</li>
                <li className='techs__name'>React</li>
                <li className='techs__name'>Git</li>
                <li className='techs__name'>Express.js</li>
                <li className='techs__name'>mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;