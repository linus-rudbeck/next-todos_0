"use client";

import "@/styles/forms.css"
import { useEffect, useState } from "react";
import { deleteTodo, getTodoById, updateTodo } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function CreateTodoPage({ params }) {

    const router = useRouter();

    const [todo, setTodo] = useState({});

    const fetchTodo = async () => {
        const todo = await getTodoById(params.id);

        todo.status = todo.done ? "Completed" : "In Progress";
        todo.createdDate = todo.createdAt.split("T")[0];
        todo.createdTime = todo.createdAt.split("T")[1].split(".")[0];

        if (todo.done && todo.completedAt) {
            todo.completedDate = todo.completedAt.split("T")[0];
            todo.completedTime = todo.completedAt.split("T")[1].split(".")[0];
        }

        setTodo(todo);
    }

    const toggleComplete = async () => {
        const updatedTodo = { ...todo, done: !todo.done };
        await updateTodo(params.id, updatedTodo);
        fetchTodo();
    }

    const deleteThis = async () => {
        await deleteTodo(params.id);
        router.push("/todos");
    }

    useEffect(() => {
        fetchTodo();
    }, []);

    return (<>

        <form className="form">
            <h2>Todo: {todo.title}</h2>
            <p><b>Status:</b> {todo.status}</p>
            <p><b>Created at:</b> {todo.createdDate} {todo.createdTime}</p>

            {todo.completedDate && <p><b>Completed at:</b> {todo.completedDate} {todo.completedAt.split("T")[1].split(".")[0]}</p>}

            <button type="button" onClick={toggleComplete}>Toggle completed</button>
            <button type="button" onClick={deleteThis}>Delete</button>
        </form>
        
    </>);
}