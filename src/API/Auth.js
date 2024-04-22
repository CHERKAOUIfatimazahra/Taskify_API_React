import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export function login(email, password) {
    return axios.post(`${API_URL}/login`, {
        email,
        password
    }).then(response => {
        const { token, user_id } = response.data;
        return { token, user_id }; 
    });
}

export function register(name, email, password) {
    return axios.post(`${API_URL}/register`, {
        name,
        email,
        password
    });
}

export function logout(token) {
    return axios.post(`${API_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}

export function refresh(token) {
    return axios.post(`${API_URL}/refresh`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}
