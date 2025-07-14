"use client"

import { useAudioStore } from '@/features/player'
import React, { useEffect, useRef } from 'react'
import TrackInfo from './TrackInfo'
import ArtistInfo from './ArtistInfo'
import { fetchArtistIfo } from '../api/fetchArtistInfo'
import { useRightSideBarStore } from '../store/rightSideBarStore'
import TopInfo from './TopInfo'

const SideBar = () => {
    const { track } = useAudioStore()
    const { setArtist, artist } = useRightSideBarStore()
    const sideBarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const fetchArtist = async () => {
            if (track && track.artist_id) {
                const artist = await fetchArtistIfo(track.artist_id)
                setArtist(artist)
            }
        }
        fetchArtist()
    }, [track])
    return (
        <div ref={sideBarRef} className='flex flex-col relative overflow-auto h-full scrollbar-hide group'>
            <TopInfo sideBarRef={sideBarRef} track={track} />
            <div className="px-4">
            <TrackInfo track={track} />
            <TrackInfo track={track} />
            <TrackInfo track={track} />
            <ArtistInfo artist={artist} />
            </div>
        </div>
    )
}

export default SideBar