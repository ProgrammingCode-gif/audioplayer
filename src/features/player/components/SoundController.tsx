import React from 'react'
import { BsFileMusicFill } from "react-icons/bs";
import SoundBar from './SoundBar';


type Props = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const SoundController = ({audioRef}: Props) => {
  return (
    <div className='flex items-center gap-5'>
      <button>
        <BsFileMusicFill size={20} className="text-neutral-200 hover:text-white transition-all duration-200 cursor-pointer" />
      </button>
        <SoundBar audioRef={audioRef} />
    </div>
  )
}

export default SoundController