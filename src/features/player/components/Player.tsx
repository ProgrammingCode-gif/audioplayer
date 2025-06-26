'use client'

import { useAudioStore } from '../store/audioStore'
import React, { useEffect, useRef } from 'react'

const Player = () => {
    const { track, isPlaying, switchPlay } = useAudioStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    console.log("Current Track:", track, "Is Playing:", isPlaying);
    

    useEffect(() => {
        if(!track || !audioRef.current) return;
        audioRef.current.src = track.audio;
        console.log(track);
        

    }, [track]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if(isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        switchPlay();
    }
    
    return (
        <div className="">
            <button onClick={togglePlay}>Play</button>
            <div className="">{track?.album_name}</div>
            <audio ref={audioRef} preload="auto" />
        </div>
    )
}

export default Player