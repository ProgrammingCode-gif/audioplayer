import { create } from "zustand";
import { User } from "../types/userType";

type UserStore = {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    clearUser: () => void;
    setLoading: (loading: boolean) => void;
};


export const useUserStore = create<UserStore>((set) => ({
    user: null,
    isLoading: false,
    setUser: (user) => set({user}),
    clearUser: () => set({ user: null }),
    setLoading: (loading) => set({ isLoading: loading})
}))