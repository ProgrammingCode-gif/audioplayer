"use client"
import React from 'react'
import { useAuthStore } from '../store/authStore'

const AuthBtns = () => {
    const {toggleLoginModal, toggleSignupModal} = useAuthStore()
    return (
        <>
            <button 
                className="text-neutral-500 text-sm font-bold hover:text-white hover:scale-105 transition-all duration-150"
                onClick={toggleSignupModal}
            >
                Зарегистрироваться
            </button>
            <button 
                onClick={toggleLoginModal}
                className="bg-white text-black px-8 py-3 rounded-full flex jcenter items-center hover:scale-105 hover:bg-[#e9e9e9] transition-all duration-100 font-bold">
                Войти
            </button>
        </>
    )
}

export default AuthBtns