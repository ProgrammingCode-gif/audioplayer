"use client"
import { User } from '@/entities/user/types/userType'
import { logOut } from '@/features/auth/model/logOut'
import React, { useEffect } from 'react'

import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";



type Props = {
  user: User
}

const AccountMenu = ({user}: Props) => {  
  return (
      <div className='relative flex h-full items-center gap-5 mr-4 group'>
        <p>{user.email}</p>
        <img className='rounded-full w-10'
        src={user?.avatarUrl ? user.avatarUrl : 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'} alt="" />
        <div className="overflow-hidden absolute -bottom-2 -mr-4 transform translate-y-full right-0 bg-neutral-800 rounded-sm w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-lg">
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 transition-all duration-150 px-4 py-2'><IoPersonOutline size={20} />Профиль</li>
            <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 transition-all duration-150 px-4 py-2'><IoSettingsOutline size={20} />Настройки</li>
            <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 text-red-500 transition-all duration-150 px-4 py-2' onClick={logOut}><IoExitOutline size={20} />Выйти</li>
          </ul>
        </div>
      </div>
  )
}

export default AccountMenu