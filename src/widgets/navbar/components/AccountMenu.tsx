"use client"
import { useUserStore } from '@/entities/user/model/store'
import { User } from '@/entities/user/types/userType'
import { logOut } from '@/features/auth/model/logOut'
import React from 'react'

type Props = {
  user: User
}

const AccountMenu = ({user}: Props) => {
  return (
    <div onClick={logOut} className='flex items-center rounded-full gap-4 h-full w-10 overflow-hidden cursor-pointer'>
      <img src={user?.avatarUrl ? user.avatarUrl : 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'} alt="" />
    </div>
  )
}

export default AccountMenu