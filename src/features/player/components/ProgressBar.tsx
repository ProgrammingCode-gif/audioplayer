'use client'

import { formatTime } from "@/shared/halpers/formatTime"
import { Track } from "@/shared/types"
import React, { useRef, useState } from "react";

type Props = {
    track: Track | null;
    progressTime: number;
    progress: number;
    setProgressTime?: (progressTime: number) => void | null;
    setProgress?: (progress: number) => void | null;
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const ProgressBar = ({ track, progressTime, progress, setProgress, setProgressTime, audioRef }: Props) => {


    return (
        <div className="flex justify-between items-center gap-4">
            <span className="text-xs text-[#ffffff82]">{track && formatTime(progressTime)}</span>
            <div
                className="relative w-lg h-1 bg-neutral-700 rounded cursor-pointer select-none group"
            >
                <div
                    className="absolute top-0 left-0 h-full bg-yellow-300 rounded"
                    style={{ width: `${progress}%` }}
                />

                <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg 
             opacity-0 group-hover:opacity-100"
                    style={{ left: `calc(${progress}% - 0.5rem)` }}
                />
            </div>
            <span className="text-xs text-[#ffffff82]">{track && formatTime(track?.duration)}</span>

        </div>
    )
}

export default ProgressBar