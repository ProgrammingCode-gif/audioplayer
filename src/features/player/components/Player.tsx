'use client'

import { useAudioStore } from '../store/audioStore'
import React, { memo, useEffect, useRef } from 'react'
import PlayerOptions from './PlayerOptions';
import ProgressBar from './ProgressBar';
import SoundController from './SoundController';

const Player = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { track, isPlaying, switchPlay } = useAudioStore();
    console.log("Player Rendered", track?.name);
    

    useEffect(() => {
        if (!track || !audioRef.current) return;
        audioRef.current.src = track.audio;
        audioRef.current.play();
    }, [track])

    return (
        <div className="relative flex bg-black w-full justify-between items-center p-4 text-white z-50">
            <div className="flex gap-2.5 items-center">
                <img src={track?.image}
                    className="w-16 h-16 rounded-md object-cover"
                    alt="" />
                <div className="flex flex-col">
                    <p className='text-sm'>{track?.name}</p>
                    <p className='text-xs text-[#cbcbcb95]'>{track?.artist_name}</p>
                </div>
            </div>
            <div className="absolute left-3/6 -translate-x-3/6 flex flex-col items-center w">
                <PlayerOptions switchPlay={switchPlay} audioRef={audioRef} isPlaying={isPlaying} />
                <ProgressBar
                    audioRef={audioRef}
                    track={track}
                />
            </div>
            <SoundController track={track} audioRef={audioRef}/>
            <audio ref={audioRef} preload="auto" />
        </div>
    )
}

export default memo(Player)