import React from 'react';

function AboutProject() {

    return (
        <section className='about-project' id='project'>
            <h2 className='title about-project__title'>О проекте</h2>
            <div className='about-project__contant'>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__time'>
                <p className='about-project__back-end'>1 неделя</p>
                <p className='about-project__front-end'>4 недели</p>
                <p className='about-project__task'>Back-end</p>
                <p className='about-project__task'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;