import React from 'react'
import { BsFileMusicFill } from "react-icons/bs";

const SoundController = () => {
  return (
    <div className='flex items-center gap-5'>
        <BsFileMusicFill className="text-2xl text-neutral-200 hover:text-white transition-all duration-200 cursor-pointer" />
    </div>
  )
}

export default SoundController