"use client"
import { useUserStore } from '@/entities/user/model/store'
import React, { useEffect } from 'react'

const UserInit = () => {
    const initUser = useUserStore((state) => state.initUser)
    useEffect(() => {
        initUser()
    }, [initUser])
    return null
}

export default UserInit