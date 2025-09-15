import { Track } from "@/entities/track"

export type PlayerState = {
    track: Track | null,
    artist: string | null,
    isPlaying: boolean,
    setTrack: (track: Track) => void,
    switchPlay: () => void
}