import { useUserStore } from "@/entities/user/model/store";
import { supabase } from "@/lib/supabase/supabaseClient";

export const signUpWithEmail = async (email: string, password: string): Promise<string | null> => {
    const setUser = useUserStore.getState().setUser;
    const setLoading = useUserStore.getState().setLoading;
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });
    if (error) {
        console.error("Sign up failed:", error.message);
        setLoading(false);
        return error.message;
    }
    const user = data.user;
    if (user) {
        setUser({
            id: user.id,
            name: user.user_metadata.full_name || '',
            email: user.email || '',
            avatarUrl: user.user_metadata.avatar_url || ''
        });
    }
    setLoading(false);
    return null;
}