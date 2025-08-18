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
        const {data: userData, error} = await supabase.from('profiles').select("*")

        console.log(user.id);
        console.log(error);
        
        console.log("userData", userData);
        
        
        
        setUser({...user});
    }

    setLoading(false);
    return null
}