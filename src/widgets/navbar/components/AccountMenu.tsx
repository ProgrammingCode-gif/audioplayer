"use client"
import { User } from '@/entities/user/types/userType'
import { logOut } from '@/features/auth/model/logOut'
import React, { useEffect, useState } from 'react'

import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

type Props = {
  user: User
}

const AccountMenu = ({user}: Props) => { 
  const [hovered, setHovered] = useState(false)
  return (
      <div
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      className='relative  group'>
        <div 

          className="flex h-full items-center gap-5 ">
          <p>{user.username || user.user_metadata.full_name}</p>
          <img className='rounded-full w-10' 
            src={user?.avatarUrl ? user.avatarUrl : 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'} alt="" />
        </div>
        <div className={`overflow-hidden absolute -bottom-2 -mr-4 transform translate-y-full right-0 bg-neutral-800 ring-1 ring-neutral-600 rounded-sm w-36 ${hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-200 shadow-lg`}>
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