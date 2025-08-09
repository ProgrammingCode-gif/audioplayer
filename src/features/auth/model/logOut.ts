import { useUserStore } from "@/entities/user/model/store";
import { supabase } from "@/lib/supabase/supabaseClient";

export const logOut = async (): Promise<void> => {
    const clearUser = useUserStore.getState().clearUser;
    const setLoading = useUserStore.getState().setLoading;

    setLoading(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout failed:", error.message);
    } else {
        clearUser();
    }

    setLoading(false);
}