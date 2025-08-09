import { create } from "zustand";
import { User } from "../types/userType";
import { supabase } from "@/lib/supabase/supabaseClient";

type UserStore = {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    clearUser: () => void;
    setLoading: (loading: boolean) => void;
    initUser: () => Promise<void>
};


export const useUserStore = create<UserStore>((set) => ({
    user: null,
    isLoading: false,
    setUser: (user) => set({user}),
    clearUser: () => set({ user: null }),
    setLoading: (loading) => set({ isLoading: loading}),
    initUser: async () => {
        set({ isLoading: true });
        const {data} = await supabase.auth.getSession()
        set({user: data.session?.user ?? null, isLoading: false});
    }
}))