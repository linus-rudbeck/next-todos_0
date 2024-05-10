"use client"
import "@/styles/forms.css"
import { createTodo } from "@/utils/api";
import { handleFormChange } from "@/utils/forms";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateTodoForm() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        title: ""
    })
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        await createTodo(formData.title);
        router.push("/todos");
    }

    return (<form onChange={handleFormChange(setFormData, formData)} onSubmit={handleFormSubmit}>

        <h2>Create Todo</h2>

        <p className="error">{errorMessage}</p>

        <input type="text" placeholder="Title" defaultValue={formData.title} name="title" />

        <button type="submit">Create</button>

    </form>);
}