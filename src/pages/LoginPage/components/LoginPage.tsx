import LoginForm from '@/features/auth/components/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-neutral-800 from-0% via-neutral-800 via-[25%] to-[#00000021] to-100%'>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-[#2f2f2f] rounded-lg shadow-lg">
            <LoginForm />
        </div>
    </div>
  )
}

export default LoginPage