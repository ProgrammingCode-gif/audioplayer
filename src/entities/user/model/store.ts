import { create } from "zustand";
import { User } from "./types";
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
        const { data: userData} = await supabase.from('profiles').select("avatar_url, username").eq('id', data.session?.user.id).single();
        
        if (userData && data.session?.user) {
            set({ user: {...data.session?.user, avatarUrl: userData.avatar_url, username: userData.username}, isLoading: false });
        } else {
            set({user: null, isLoading: false});
        }
    }
}))