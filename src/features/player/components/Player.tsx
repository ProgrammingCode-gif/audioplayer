'use client'

import { useAudioStore } from '../store/audioStore'
import React, { useEffect, useRef } from 'react'
import PlayerOptions from './PlayerOptions';
import ProgressBar from './ProgressBar';

const Player = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { track, isPlaying, switchPlay, progress, setProgress, progressTime, setProgressTime } = useAudioStore();
    
    useEffect(() => {
        console.log("Current Track:", track, "Is Playing:", isPlaying);
        if(!track || !audioRef.current) return;
        audioRef.current.src = track.audio;
        audioRef.current.play();
    }, [track])
    
    return (
        <div className="fixed bottom-0 left-0 flex bg-black w-full justify-between items-center p-4 text-white z-50">
            <div className="flex gap-2.5 items-center">
                <img src={track?.image} 
                    className="w-16 h-16 rounded-md object-cover" 
                    alt=""/>
                <div className="flex flex-col">
                    <p className='text-sm'>{track?.name}</p>
                    <p className='text-xs text-[#cbcbcb95]'>{track?.artist_name}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <PlayerOptions switchPlay={switchPlay} audioRef={audioRef} track={track} isPlaying={isPlaying}/>
                <ProgressBar 
                    audioRef={audioRef} 
                    setProgress={setProgress}
                    setProgressTime={setProgressTime}
                    progress={progress} 
                    progressTime={progressTime} 
                    track={track} 
                />
            </div>
            <div className="">{track?.name}</div>
            <audio ref={audioRef} preload="auto" />
        </div>
    )
}

export default Player