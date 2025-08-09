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
        setUser(user);
    }
    setLoading(false);
    return null;
}