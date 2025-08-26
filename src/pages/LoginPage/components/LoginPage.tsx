import { LoginForm } from '@/features/auth'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#1a1a1a] flex justify-center items-center'>
      <div className="w-full max-w-md mt-6 mb-6">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage