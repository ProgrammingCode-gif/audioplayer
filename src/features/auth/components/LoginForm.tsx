"use client"
import { useState } from 'react'
import { loginWithEmail } from '../model/loginWithEmail'
import { useUserStore } from '@/entities/user/model/store'
import { useRouter } from 'next/navigation'

import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import SocialMediaBtn from '@/shared/ui/SocialMediaBtn/SocialMediaBtn'
import FormInput from '@/shared/ui/FormInput/FormInput'


const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const {isLoading} = useUserStore()

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
    <div className='text-[#e2e2e2] w-full p-6 ring-1 ring-[#878787] bg-[#1e1e1e] rounded-lg shadow-lg shadow-[#000000a4]'>
      <div className="flex flex-col gap-5 justify-between items-center mb-6">
        <FaSpotify size={40} />
        <h2 className='text-3xl font-bold'>Войти в <span className='text-[#f2d670]'>Beatify</span></h2>
      </div>

      <div className="flex flex-col gap-2 mb-6 after:content-[''] after:w-full after:h-[1px] after:bg-[#686868d4] after:mt-2 after:mb-2 after:rounded-2xl">
        <SocialMediaBtn icon={<FcGoogle size={25}/>} text='Войти через Google' />
        <SocialMediaBtn icon={<FaFacebook size={25} color='#1877F2' />} text='Войти через Facebook' />
        <SocialMediaBtn icon={<FaApple size={25} color='#FFFFFF' />} text='Войти через Apple' />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className='flex flex-col gap-2'>
          <label className='font-bold' htmlFor="username">Адресс электронной почты:</label>
          <FormInput type={'email'} placeholder='Почта' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-bold' htmlFor="password">Пароль:</label>
          <FormInput type={'password'} placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='text-[#363636] text-lg font-bold cursor-pointer w-3/4 self-center px-7 py-2 bg-[#f2d670] rounded-3xl mt-2.5' type="submit">Войти</button>
        {isLoading && <div>Loading</div>}
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  )
}

export default LoginForm