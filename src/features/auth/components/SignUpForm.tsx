"use client"

import { useUserStore } from '@/entities/user/model/store'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signUpWithEmail } from '../model/SignUpWithEmail'

const SignUpForm = () => {
    const router = useRouter()
    const { user } = useUserStore()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const res = await signUpWithEmail(email, password)
        if (res) {
            console.error("Login error:", res);
        } else {
            console.log("Login successful");
            router.push('/')
        }
    }
    return (
        <div>
            
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="username">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default SignUpForm