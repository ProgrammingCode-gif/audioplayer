'use client'

import { formatTime } from "@/shared/halpers/formatTime"
import { Track } from "@/shared/types"
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

type Props = {
    track: Track | null;
    progressTime: number;
    progress: number;
    setProgressTime: (progressTime: number) => void | null;
    setProgress: (progress: number) => void | null;
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const ProgressBar = ({ track, progressTime, progress, setProgress, setProgressTime, audioRef }: Props) => {
    const barRef = useRef<HTMLDivElement | null>(null)
    const [tempProgress, setTempProgress] = useState<number>(0)
    const [dragging, setDragging] = useState(false)

    useEffect(() => {
        if (!track || !audioRef.current) return;

        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            console.log(dragging);

            if (!dragging && audio) {
                const percentage = (audio.currentTime || 0) / (audio.duration || 1) * 100;
                setProgress(percentage);
            }
        };
        audio.addEventListener('timeupdate', handleTimeUpdate);

        const handleMouseMove = (e: MouseEvent) => {
            const percent = getPercent(e.clientX);
            setTempProgress(percent * 100);
            setProgress(percent * 100);
            console.log("Mouse move event triggered", progress, percent, dragging, tempProgress);
        }
    
        const handleMouseUp = (e: MouseEvent) => {
            console.log("Mouse up event triggered", dragging, tempProgress);
            
            if (dragging && audioRef.current && track) {
                const time = getPercent(e.clientX);
                console.log(time);
                
                const newTime = time * track.duration;
                setProgressTime(newTime);
                setProgress(tempProgress * 100);
                audioRef.current.currentTime = newTime;
            }
            setDragging(false);
            setTempProgress(0);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        if(dragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [track, dragging]);

    const getPercent = (clientX: number) => {
        if (!barRef.current) return 0;
        const rect = barRef.current.getBoundingClientRect()
        const offsetX = clientX - rect.left
        const percent = Math.min(Math.max(offsetX / rect.width, 0), 1)
        return percent
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const percent = getPercent(e.clientX)
        if (audioRef.current && track) {
            audioRef.current.currentTime = percent * track.duration || 0
        }
        setProgress(percent * 100)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current) return;
        setDragging(true);
    }


    return (
        <div className="flex justify-between items-center gap-4">
            <span className="text-xs text-[#ffffff82]">{audioRef.current?.currentTime}</span>
            <div
                ref={barRef}
                onClick={handleClick}
                className="relative w-lg h-1 bg-neutral-700 rounded cursor-pointer select-none group"
            >
                <div
                    className="absolute top-0 left-0 h-full bg-yellow-300 rounded"
                    style={{ width: `${progress}%` }}
                />

                <div
                    onMouseDown={handleMouseDown}
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg ${dragging ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                    style={{ left: `calc(${progress}% - 0.5rem)` }}
                />
            </div>
            <span className="text-xs text-[#ffffff82]">{track && formatTime(track?.duration)}</span>

        </div>
    )
}

export default ProgressBar