import { Track } from '@/shared/types'
import React from 'react'

type Props = {
    track: Track | null
}

const TrackInfo = ({track} : Props) => {
  return (
    <div>
        <img src={track?.image} className='w-full rounded-md' alt="" />
        <div className="flex flex-col mt-4">
            <p className='text-white text-2xl font-bold leading-7'>{track?.name}</p>
            <p className='text-neutral-400 font-bold'>{track?.artist_name}</p>
        </div>
    </div>
  )
}

export default TrackInfo