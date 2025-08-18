import { useUserStore } from "@/entities/user/model/store";
import { supabase } from "@/lib/supabase/supabaseClient";

export const loginWithEmail = async (email: string, password: string): Promise<string | null> => {
    const setUser = useUserStore.getState().setUser;
    const setLoading = useUserStore.getState().setLoading;
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({email, password})

    if (error) {
        console.log("Login failed:", error.message);
        setLoading(false);
        return error.message;
    }
    const user = data.user;

    if (user) {
        const {data: userData} = await supabase.from('profiles').select("avatar_url, username").eq('id', user.id).single();        
        
        setUser({...user, avatarUrl: userData?.avatar_url, username: userData?.username ?? null});
    }

    setLoading(false);
    return null
}