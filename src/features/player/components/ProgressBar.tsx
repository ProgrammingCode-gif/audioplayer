'use client'

import { formatTime } from "@/shared/halpers/formatTime"
import { Track } from "@/shared/types"
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Bar from "./Bar";

type Props = {
    track: Track | null;
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const ProgressBar = ({ track, audioRef }: Props) => {
    const [progress, setProgress] = useState<number>(0)  
    
    const formattedDuration = useMemo(() => {
        return track ? formatTime(track.duration) : "0:00";
    }, [track])
    
    const formattedCurrentTime = useMemo(() => {
        return audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00";
    }, [audioRef.current?.currentTime])

    const changeProgress = useCallback((newProgress: number) => {
        if (!audioRef.current || !track) return;
        const newTime = (newProgress / 100) * track.duration;
        audioRef.current.currentTime = newTime;
        setProgress(newProgress);
    }, [audioRef, track]);
    
    
    useEffect(() => {
        if (!track || !audioRef.current) return;

        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            if (audio) {
                const percentage = (audio.currentTime || 0) / (audio.duration || 1) * 100;
                setProgress(percentage);
            }
        };
        
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [track]);



    return (
        <div className="flex justify-between items-center gap-4">
            <span className="text-xs text-[#ffffff82]">{formattedCurrentTime}</span>
            <Bar initialProgress={progress} onProgressChange={changeProgress} widthClass={'w-lg'} />
            <span className="text-xs text-[#ffffff82]">{formattedDuration}</span>
        </div>
    )
}

export default memo(ProgressBar);