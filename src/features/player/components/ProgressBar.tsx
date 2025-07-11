'use client'

import { formatTime } from "@/shared/halpers/formatTime"
import { Track } from "@/shared/types"
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Bar from "./Bar";

type Props = {
    track: Track | null;
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const ProgressBar = ({ track, audioRef }: Props) => {
    // const barRef = useRef<HTMLDivElement | null>(null)
    // const [tempProgress, setTempProgress] = useState<number>(0)
    // const [dragging, setDragging] = useState(false) 
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

        // const handleMouseMove = (e: MouseEvent) => {
        //     const percent = getPercent(e.clientX);
        //     setTempProgress(percent * 100);
        //     setProgress(percent * 100);
        // }
    
        // const handleMouseUp = (e: MouseEvent) => {            
        //     if (dragging && audioRef.current && track) {
        //         const time = getPercent(e.clientX);
                
        //         const newTime = time * track.duration;
        //         setProgress(tempProgress * 100);
        //         audioRef.current.currentTime = newTime;
        //     }
        //     setDragging(false);
        //     setTempProgress(0);
        //     document.removeEventListener('mousemove', handleMouseMove);
        //     document.removeEventListener('mouseup', handleMouseUp);
        // }

        // if(dragging) {
        //     document.addEventListener('mousemove', handleMouseMove);
        //     document.addEventListener('mouseup', handleMouseUp);
        // }

        // return () => {
        //     audio.removeEventListener('timeupdate', handleTimeUpdate);
        //     document.removeEventListener('mousemove', handleMouseMove);
        //     document.removeEventListener('mouseup', handleMouseUp);
        // };
    }, [track, /* dragging */]);

    // const getPercent = useCallback((clientX: number) => {
    //     if (!barRef.current) return 0;
    //     const rect = barRef.current.getBoundingClientRect()
    //     const offsetX = clientX - rect.left
    //     const percent = Math.min(Math.max(offsetX / rect.width, 0), 1)
    //     return percent
    // }, [barRef])

    // const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    //     const percent = getPercent(e.clientX)
    //     if (audioRef.current && track) {
    //         audioRef.current.currentTime = percent * track.duration || 0
    //     }
    //     setProgress(percent * 100)
    // }, [getPercent, audioRef, track, setProgress])

    // const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    //     if (!audioRef.current) return;
    //     setDragging(true);
    // }, [audioRef]);


    return (
        <div className="flex justify-between items-center gap-4">
            <span className="text-xs text-[#ffffff82]">{formattedCurrentTime}</span>
            {/* <div
                ref={barRef}
                onClick={handleClick}
                className="relative w-lg h-1 bg-neutral-700 rounded cursor-pointer select-none group"
            >
                <div
                    className="absolute top-0 left-0 h-full bg-[#f9e16a] rounded"
                    style={{ width: `${progress}%` }}
                />

                <div
                    onMouseDown={handleMouseDown}
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg ${dragging ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                    style={{ left: `calc(${progress}% - 0.5rem)` }}
                />
            </div> */}
            <Bar initialProgress={progress} onProgressChange={changeProgress} />
            <span className="text-xs text-[#ffffff82]">{formattedDuration}</span>
        </div>
    )
}

export default React.memo(ProgressBar);