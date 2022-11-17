class MainApi {

    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Ошибка: ${res.statusText}`)
        }
    }
    
    addMovie = (movie) => {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(movie)
        })
        .then(this._checkResponse)
    };


    getSavedMovies = () => {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    deleteSavedMovies = (Id) => {
        return fetch(`${this._baseUrl}/movies/${Id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.vyalov.nomorepartiesxyz.ru',
    headers: {
        "access-control-request-headers": "https://vyalov.movie.nomorepartiesxyz.ru",
        "Content-Type": 'application/json',
    },
});