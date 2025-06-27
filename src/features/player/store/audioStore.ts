import {create} from 'zustand';
import { PlayerState } from "../types"
import { Track } from '@/shared/types';

export const useAudioStore = create<PlayerState>((set) => ({
    track: null,
    isPlaying: false,
    progress: 0,
    progressTime: 0,
    setProgressTime: (progressTime: number) => set({ progressTime }),
    setProgress: (progress: number) => set({ progress }),
    setTrack: (track: Track) => set({ track, isPlaying: true }),
    switchPlay: () => set((state: PlayerState) => ({ isPlaying: !state.isPlaying }))
}))