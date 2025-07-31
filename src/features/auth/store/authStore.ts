import { create } from 'zustand';

type AuthState = {
    user: User | null;
    openLoginModal: boolean;
    openSignupModal: boolean;
    setUser: (user: User) => void;
    toggleLoginModal: () => void;
    toggleSignupModal: () => void;
}

type User = {
    id: number;
    name: string;
    email: string;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    openLoginModal: false,
    openSignupModal: false,
    setUser: (user) => set({ user }),
    toggleLoginModal: () => set((state) => ({ openLoginModal: !state.openLoginModal })),
    toggleSignupModal: () => set((state) => ({ openSignupModal: !state.openSignupModal }))
}));