"use client"

import { useAudioStore } from '@/features/player'
import React from 'react'

const SideBar = () => {
    const { track } = useAudioStore()
    console.log(track);
    return (
        <div>SideBar</div>
    )
}

export default SideBar