import React, { memo, useEffect, useState } from 'react'
import Bar from './Bar'
import { IoVolumeMedium } from "react-icons/io5";

type Props = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const SoundBar = ({audioRef}: Props) => {
  const [progress, setProgress] = useState<number>(50);

  const handleVolumeChange = (newProgress: number) => {
    if (!audioRef.current) return;
    setProgress(newProgress);
    audioRef.current.volume = newProgress / 100;
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onVolumeChange = () => {
      if (!audioRef.current) return;
      setProgress(Math.round(audioRef.current.volume * 100));
    };

    audio.addEventListener('volumechange', onVolumeChange);

    return () => {
      audio.removeEventListener('volumechange', onVolumeChange);
    };
  }, [audioRef])

  return (
    <div className="flex items-center gap-3">
        <IoVolumeMedium size={20}/>
        <Bar changeWhileDragging={true} initialProgress={progress} onProgressChange={handleVolumeChange} widthClass='w-24'/>
    </div>
  )
}

export default memo(SoundBar)