import { Artist } from '@/entities/artist';
import { create } from 'zustand';

type RightSideBarStore = {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
    artist: Artist | null;
    setArtist: (artist: Artist | null) => void;
}

export const useRightSideBarStore = create<RightSideBarStore>((set) => ({
    isOpen: false,
    artist: null,
    setArtist: (artist) => set({ artist }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
}));