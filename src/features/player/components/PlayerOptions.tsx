import { Track } from "@/shared/types";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import React from "react";

type Props = {
    track: Track | null;
    isPlaying: boolean;
    switchPlay: () => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const PlayerOptions = ({track, isPlaying, audioRef, switchPlay }: Props) => {

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
        <div className="flex jcenter items-center gap-2">
            <button>
                <BiSolidSkipPreviousCircle className="text-white text-2xl size-8 hover:text-neutral-200 transition-all duration-150 cursor-pointer" />

            </button>
            <button
                onClick={togglePlay}
                className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
            >
                {isPlaying ?
                    <FaCirclePause className="text-white text-2xl size-8 transition-all duration-150" /> :
                    <FaCirclePlay className="text-white text-2xl size-8 transition-all duration-150" />
                }
            </button>
            <button>
                <BiSolidSkipNextCircle className="text-white text-2xl size-8 hover:text-neutral-200 transition-all duration-150 cursor-pointer" />
            </button>
        </div>
    )
}

export default PlayerOptions