"use client"
import React, { useState } from 'react'
import { loginWithEmail } from '../model/loginWithEmail'
import { useUserStore } from '@/entities/user/model/store'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  const { user } = useUserStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errorMessage = await loginWithEmail(email, password)
    if (errorMessage) {
      console.log("Login error:", errorMessage);
      setError(errorMessage || "An error occurred during login");
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
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  )
}

export default LoginForm