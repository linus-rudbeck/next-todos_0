"use client";

import { getTodos } from "@/utils/api";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/components/Todos/TodosList.module.css";


export default function TodosList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (<ul className={styles.todosList}>
        {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? styles.done : ""}>
                <Link href={`/todos/${todo.id}`}>
                    
                    {todo.title}
                </Link>
            </li>
        ))}
    </ul>);
}