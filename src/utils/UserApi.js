class UserApi {

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

    register = ({ name, email, password }) => {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkResponse)
    }

    login = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    }

    outLogin = () => {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    getUser = () => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    updateUser = ({ name, email }) => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(this._checkResponse)
    }
}

export const userApi = new UserApi({
    baseUrl: 'https://api.vyalov.nomorepartiesxyz.ru',
    headers: {
        "access-control-request-headers": "https://vyalov.movie.nomorepartiesxyz.ru",
        "Content-Type": 'application/json',
    },
});