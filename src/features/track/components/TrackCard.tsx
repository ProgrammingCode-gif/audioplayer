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
        <div onClick={() => {setTrack(track); console.log(track, "Current:", currentTrack)}}>{track.album_name}</div>
    )
}

export default TrackCard