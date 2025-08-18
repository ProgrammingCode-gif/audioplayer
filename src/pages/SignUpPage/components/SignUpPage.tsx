import SignUpForm from '@/features/auth/components/SignUpForm'
import React from 'react'

const SignUpPage = () => {
    return (
        <div className='w-full min-h-screen bg-[#1a1a1a] flex justify-center items-center'>
            <div className="w-full max-w-md mt-6 mb-6">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage