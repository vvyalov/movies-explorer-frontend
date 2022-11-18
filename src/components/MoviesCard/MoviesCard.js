import React from "react";

function MoviesCard({ movie, moviesSaved, onLikeMovieClick, isDelete, onDeleteClick }) {

    const handleLikeClick = () => {
        onLikeMovieClick(movie);
    }

    const handleDeleteClick = () => {
        onDeleteClick(movie);
    }

    const isLikeMovie = moviesSaved.some(i => i.movieId === movie.movieId);

    const movieSavedButtonClassName = `link movie-card__like ${isLikeMovie && 'movie-card__like_active'} ${isDelete && 'movie-card__delete'}`;

    return (
        <div className="movie-card">
            <img className="movie-card__image" src={movie.image} alt={movie.nameRU} />
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{movie.nameRU}</h2>
                    <button type="button" onClick={isLikeMovie ? handleDeleteClick : handleLikeClick} className={movieSavedButtonClassName}>{isLikeMovie}</button>
                </div>
            <p className="movie-card__length">{movie.duration} минут</p>
        </div>
    )
}

export default MoviesCard;