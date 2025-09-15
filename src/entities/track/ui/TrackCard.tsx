'use client'

import React from 'react'
import { useAudioStore } from '@/features/player/store/audioStore'
import { Track } from '../model/types'

type TrackCardProps = {
    track: Track;
}

const TrackCard = ({ track }: TrackCardProps) => {

    const { setTrack, track: currentTrack } = useAudioStore()

    return (
        <div 
            onClick={() => setTrack(track)}
            className='p-2.5 rounded-md overflow-hidden w-44 flex flex-col gap-4 cursor-pointer hover:bg-[#3c3c3c39] transition-all duration-150'>
                <img src={track.image} alt={track.name} className="w-full rounded-md self-center" />
                <div className="flex flex-col">
                    <p className="font-bold text-sm line-clamp-1 text-neutral-400">{track.name}</p>
                    <p className="font-bold text-sm text-neutral-500 line-clamp-1">{track.artist_name}</p>
                </div>
        </div>
    )
}

export default TrackCard