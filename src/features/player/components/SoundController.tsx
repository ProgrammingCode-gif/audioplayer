"use client"
import React from 'react'
import { BsFileMusicFill } from "react-icons/bs";
import SoundBar from './SoundBar';
import { useRightSideBarStore } from '@/features/rightSideBar';

type Props = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const SoundController = ({audioRef}: Props) => {
  const { toggle, isOpen } = useRightSideBarStore();
  return (
    <div className='flex items-center gap-5'>
      <button onClick={toggle}>
        <BsFileMusicFill size={20} className={`${isOpen ? "text-[#f9e16a] hover:text-[#f9e16adb]" : "text-neutral-200 hover:text-white"} transition-all duration-200 cursor-pointer`} />
      </button>
        <SoundBar audioRef={audioRef} />
    </div>
  )
}

export default SoundController