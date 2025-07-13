"use client"

import { useAudioStore } from '@/features/player'
import React, { useEffect } from 'react'
import TrackInfo from './TrackInfo'
import ArtistInfo from './ArtistInfo'
import { fetchArtistIfo } from '../api/fetchArtistInfo'
import { useRightSideBarStore } from '../store/rightSideBarStore'

const SideBar = () => {
    const { track } = useAudioStore()
    const { setArtist, artist } = useRightSideBarStore()

    useEffect(() => {
        const fetchArtist = async () => {
            if (track && track.artist_id) {
                const artist = await fetchArtistIfo(track.artist_id)
                setArtist(artist)
                console.log(artist);
                
            }
        }
        fetchArtist()
    }, [track])
    return (
        <div className='flex flex-col relative p-4'>
            <TrackInfo track={track} />
            <ArtistInfo artist={artist} />
        </div>
    )
}

export default SideBar