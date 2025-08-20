'use client'

import React from 'react'
import { Track } from '@/shared/types'
import { useAudioStore } from '@/features/player/store/audioStore'

type TrackCardProps = {
    track: Track
}

const TrackCard = ({ track }: TrackCardProps) => {

    const { setTrack, track: currentTrack } = useAudioStore()

    return (
        <div 
            onClick={() => setTrack(track)}
            className='p-2.5 mt-16 rounded-lg overflow-hidden w-44 flex flex-col gap-4 cursor-pointer hover:bg-[#3c3c3c39] transition-all duration-200'>
                <img src={track.image} alt={track.name} className="w-full rounded-lg self-center" />
                <div className="flex flex-col">
                    <p className="font-bold text-sm line-clamp-1 text-neutral-400">{track.name}</p>
                    <p className="font-bold text-sm text-neutral-500 line-clamp-1">{track.artist_name}</p>
                </div>
        </div>
    )
}

export default TrackCard