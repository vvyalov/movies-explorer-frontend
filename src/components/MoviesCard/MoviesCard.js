import React from "react";

function MoviesCard({ name, length, link }) {
    const isLiked = false;
    const isDelete = false;
    return (
        <div className="movie-card">
            <img className="movie-card__image" src={link} alt={name} />
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{name}</h2>
                    <button type="button" className={`link movie-card__like ${isLiked && 'movie-card__like_active'} ${isDelete && 'movie-card__delete'}`}/>
                </div>
            <p className="movie-card__length">{length} минут</p>
        </div>
    )
}

export default MoviesCard;