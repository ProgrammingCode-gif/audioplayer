import {create} from 'zustand';
import { PlayerState } from "../types"
import { Track } from '@/shared/types';

export const useAudioStore = create<PlayerState>((set) => ({
    track: null,
    artist: null,
    isPlaying: false,
    setTrack: (track: Track) => set({ track, isPlaying: true }),
    switchPlay: () => set((state: PlayerState) => ({ isPlaying: !state.isPlaying }))
}))