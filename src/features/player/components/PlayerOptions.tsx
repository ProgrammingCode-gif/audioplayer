import { Track } from "@/shared/types";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";

type Props = {
    togglePlay: () => void;
    track: Track | null;
    isPlaying: boolean;
}

const PlayerOptions = ({togglePlay, track, isPlaying}: Props) => {
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