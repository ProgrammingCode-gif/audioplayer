'use client'

import React from 'react'
import { Track } from '@/shared/types'
import { usePlayerStore } from '@/shared/state/tracks'
type TrackCardProps = {
    track: Track
}

const TrackCard = ({ track }: TrackCardProps) => {
    const setTreck = usePlayerStore((state) => state.setTrack)
    const isPlaying = usePlayerStore((state) => state.isPlaying)
    const currentTrack = usePlayerStore((state) => state.currentTrack)

    const toggleClick = (track: Track) => {
        if (currentTrack?.id === track.id) {
            usePlayerStore.getState().togglePlay()
        } else {
            setTreck(track)
        }
        console.log(`Track clicked: ${track.album_name}, isPlaying: ${isPlaying}`)
    }

    return (
        <div onClick={() => toggleClick(track)}>{track.album_name}</div>
    )
}

export default TrackCard