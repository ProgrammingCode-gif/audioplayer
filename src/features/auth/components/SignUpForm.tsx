import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <h2>Login Form</h2>
            <form  className="flex flex-col gap-4">
                <div>
                    <label htmlFor="username">Email:</label>
                    <input  type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default SignUpForm