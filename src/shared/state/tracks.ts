import { Track } from '@/shared/types'
import { create } from 'zustand';

type PlayerState = {
    currentTrack: Track | null;
    isPlaying: boolean;
    setTrack: (track: Track) => void;
    togglePlay: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    currentTrack: null,
    isPlaying: false,
    setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying}))
}))