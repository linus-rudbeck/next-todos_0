"use client"
import "@/styles/forms.css"
import { login } from "@/utils/api";
import { setAuthorization } from "@/utils/auth";
import { handleFormChange } from "@/utils/forms";
import { useState } from "react";

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: "linus@distansakademin.se",
        password: "string"
    })
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(formData.email, formData.password);
            setAuthorization(response);
            location.href = "/";
        }
        catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (<form onChange={handleFormChange(setFormData, formData)} onSubmit={handleFormSubmit}>

        <h2>Login</h2>

        <p className="error">{errorMessage}</p>

        <input type="text" placeholder="Email" defaultValue={formData.email} name="email" />

        <input type="password" placeholder="Password" defaultValue={formData.password} name="password" />

        <button type="submit">Login</button>

    </form>);
}


