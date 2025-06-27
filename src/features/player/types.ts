import { Track } from  '../../shared/types'

export type PlayerState = {
    track: Track | null,
    isPlaying: boolean,
    progress: number,
    progressTime: number,
    setProgressTime: (progressTime: number) => void,
    setProgress: (progress: number) => void,
    setTrack: (track: Track) => void,
    switchPlay: () => void
}