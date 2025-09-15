"use client"
import React, { memo } from 'react'
import { BsFileMusicFill } from "react-icons/bs";
import SoundBar from './SoundBar';
import { useRightSideBarStore } from '@/widgets/rightSideBar';
import { Track } from '@/entities/track';

type Props = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  track: Track | null
}

const SoundController = ({audioRef, track}: Props) => {
  const { toggle, isOpen } = useRightSideBarStore();
  return (
    <div className='flex items-center gap-5'>
      <button onClick={ track ? toggle : () => {return}}>
        <BsFileMusicFill size={20} className={`${isOpen && track ? "text-[#f9e16a] hover:text-[#f9e16adb]" : !track ? "text-neutral-700" : "text-neutral-200 hover:text-white"} transition-all duration-200 cursor-pointer`} />
      </button>
        <SoundBar audioRef={audioRef} />
    </div>
  )
}

export default  memo(SoundController)