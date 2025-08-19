"use client"

import React, { useState } from 'react'
import { signUpWithEmail } from '../model/signUpWithEmail'
import { useUserStore } from '@/entities/user/model/store'

import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import FormInput from '@/shared/ui/FormInput/FormInput';
import SocialMediaBtn from '@/shared/ui/SocialMediaBtn/SocialMediaBtn';

const SignUpForm = () => {
    const { isLoading } = useUserStore()
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
        <div className='text-[#e2e2e2] w-full p-6 ring-1 ring-[#878787] bg-[#1e1e1e] rounded-lg shadow-lg shadow-[#000000a4]'>
            {successMessage ? <div className="text-green-500">{successMessage} Подтвердите свою почту</div> :
                <>
                    <div className="flex justify-center items-center flex-col gap-5 mb-6">
                        <FaSpotify size={40} />
                        <h2 className='text-3xl font-bold'>Регистрация в <span className='text-[#f2d670]'>Beatify</span></h2>
                    </div>
                    <div className="flex gap-2 mb-3">
                        <SocialMediaBtn icon={<FcGoogle size={25} />} />
                        <SocialMediaBtn icon={<FaGithub size={25} color='#FFFFFF' />} />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 after:content-[''] before:w-full before:h-[1px] before:bg-[#686868d4] before:mt-2 before:mb-2 before:rounded-2xl">
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold' htmlFor="email">Адресс электронной почты:</label>
                            <FormInput type={'email'} placeholder='Почта' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold' htmlFor="username">Имя пользователя:</label>
                            <FormInput type={'text'} placeholder='Имя' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold' htmlFor="password">Пароль:</label>
                            <FormInput type={'password'} placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {successMessage && <div className="text-green-500">{successMessage}</div>}
                        <button className='text-[#363636] text-lg font-bold cursor-pointer w-3/4 self-center px-7 py-2 bg-[#f2d670] rounded-3xl mt-2.5' type="submit">Зарегистрироваться</button>
                        {isLoading && <div>Loading</div>}
                        {error && <div className="text-red-500">{error}</div>}
                    </form>
                </>
            }
        </div>
    )
}

export default SignUpForm