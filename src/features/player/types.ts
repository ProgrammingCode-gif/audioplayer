import { Track } from  '../../shared/types'

export type PlayerState = {
    track: Track | null,
    isPlaying: boolean,
    setTrack: (track: Track) => void,
    switchPlay: () => void
}