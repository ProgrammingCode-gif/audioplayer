"use client"

import { useAudioStore } from '@/features/player'
import React, { useEffect, useRef, useState } from 'react'
import TrackInfo from './TrackInfo'
import ArtistInfo from './ArtistInfo'
import { fetchArtistIfo } from '../api/fetchArtistInfo'
import { useRightSideBarStore } from '../store/rightSideBarStore'
import TopInfo from './TopInfo'

const SideBar = () => {
    const { track } = useAudioStore()
    const { setArtist, artist, close } = useRightSideBarStore()
    const [ hovered, setHovered ] = useState<boolean>(false)
    const sideBarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const fetchArtist = async () => {
            setArtist(null)
            if (track && track.artist_id) {
                
                const artist = await fetchArtistIfo(track.artist_id)
                setArtist(artist)
            }
        }
        fetchArtist()

        return () => {
            setArtist(null)
        }
    }, [track])
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={sideBarRef} 
            className='flex flex-col relative overflow-auto h-full scrollbar-hide group min-w-[250px]'>
            <TopInfo hovered={hovered} close={close} sideBarRef={sideBarRef} track={track} />
            <div className="px-4 mb-4">
            <TrackInfo track={track} />
            <ArtistInfo artist={artist} />
            </div>
        </div>
    )
}

export default SideBar