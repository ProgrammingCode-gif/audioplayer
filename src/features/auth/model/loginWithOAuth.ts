import { useUserStore } from "@/entities/user/model/store";
import { supabase } from "@/lib/supabase/supabaseClient";
import type { Provider } from "@supabase/supabase-js"

export const loginWithOAuth = async (provider: Provider) => {
    const setLoading = useUserStore.getState().setLoading;
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: `${window.location.origin}/auth/callback`
        }
    });
    if (error) {
        console.log("Login failed:", error.message);
        setLoading(false);
        return error.message;
    }
    setLoading(false);
    return null;
}