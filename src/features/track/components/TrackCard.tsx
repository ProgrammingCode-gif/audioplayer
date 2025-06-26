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
        <div className=' rounded-md overflow-hidden w-44 flex items-center gap-4 border-b cursor-pointer hover:bg-gray-100'>
            <div className="">
                <img src={track.image} alt={track.name} className="w-full rounded-md" />
                <div className="flex flex-col">
                    <span className="font-bold">{track.name}</span>
                    <span className="text-sm text-gray-500">{track.artist_name}</span>
                </div>
            </div>
        </div>
    )
}

export default TrackCard