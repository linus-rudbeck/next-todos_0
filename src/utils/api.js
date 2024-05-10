import { getAccessToken } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const jsonHeaders = {
    "Content-Type": "application/json"
};

export async function login(email, password) {
    const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
            ...jsonHeaders
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
}

export async function getUserInfo() {
    const url = API_URL + "/manage/info";

    const response = await fetch(url, {
        headers: {
            "Authorization": "Bearer " + getAccessToken()
        },
    });

    return response.json();
}


export async function createTodo(title) {
    const url = API_URL + "/api/todos";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + getAccessToken(),
            ...jsonHeaders
        },
        body: JSON.stringify({ title })
    });

    return response.json();
}


export async function getTodos() {
    const url = API_URL + "/api/todos";

    const response = await fetch(url, {
        headers: {
            "Authorization": "Bearer " + getAccessToken(),
        },
    });

    return response.json();
}


export async function getTodoById(id) {
    const url = API_URL + "/api/todos/" + id;

    const response = await fetch(url, {
        headers: {
            "Authorization": "Bearer " + getAccessToken(),
        },
    });

    return response.json();
}

export async function updateTodo(id, todo){
    const url = API_URL + "/api/todos/" + id;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Authorization": "Bearer " + getAccessToken(),
            ...jsonHeaders
        },
        body: JSON.stringify(todo)
    });

    return response.ok;
}

export async function deleteTodo(id){
    const url = API_URL + "/api/todos/" + id;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + getAccessToken(),
        },
    });

    return response.ok;
}