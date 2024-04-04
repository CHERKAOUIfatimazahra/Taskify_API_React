import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export function login(email, password) {
    return axios.post(`${API_URL}/login`, {
        email,
        password
    });
}

export function register(name, email, password) {
    return axios.post(`${API_URL}/register`, {
        name,
        email,
        password
    });
}
