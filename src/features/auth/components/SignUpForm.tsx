"use client"

import React, { useState } from 'react'
import { signUpWithEmail } from '../model/signUpWithEmail'

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const errorMessage = await signUpWithEmail(email, password, username)
        if (errorMessage) {
            console.log("Login error:", errorMessage);
            setError(errorMessage || "An error occurred during login");
        } else {
            setEmail('')
            setPassword('')
            console.log("SignUp successful");
            setSuccessMessage("Проверьте почту для подтверждения регистрации")
        }
    }
    return (
        <div>
            {successMessage ? <div className="text-green-500">{successMessage} Подтвердите свою почту</div> : 
            <>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                </div>
                {successMessage && <div className="text-green-500">{successMessage}</div>}
                <button type="submit">Login</button>
                {error && <div className="text-red-500">{error}</div>}
            </form>
            </>
            }
        </div>
    )
}

export default SignUpForm