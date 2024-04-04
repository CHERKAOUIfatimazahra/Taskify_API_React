import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api";

export async function getTasks(token) {
    return await axios.get(`${API_URL}/v1/tasks`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}


export async function createTask(data, token) {
    return axios.post(`${API_URL}/v1/tasks`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}

export async function getSingleTask(task, token) {
    return await axios.get(`${API_URL}/v1/tasks/${task}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}

export async function updateTaskApi(taskToUpdate, updatedData, token) {
    return await axios.put(`${API_URL}/v1/tasks/${taskToUpdate}`, updatedData,{
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}


export async function DeleteTask(taskToDelete, token) {
    return await axios.delete(`${API_URL}/v1/tasks/${taskToDelete}`,{
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}


export async function isComplateTask(task, token, status) {
    return await axios.patch(`${API_URL}/v1/tasks/${task}/complete`,{is_completed:status},{
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}