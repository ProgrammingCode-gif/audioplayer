import { useUserStore } from "@/entities/user/model/store";
import { supabase } from "@/lib/supabase/supabaseClient";

export const signUpWithEmail = async (email: string, password: string, username: string): Promise<string | null> => {
    const setUser = useUserStore.getState().setUser;
    const setLoading = useUserStore.getState().setLoading;
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password: password.trim(),
        options: {
            data: {
                username: username
            }
        }
    });
    if (error) {
        console.log("Sign up failed:", error.message);

        setLoading(false);
        return error.message;
    }

    if (data.user?.identities && data.user.identities.length > 0) {
        if (!data.user) {
            return "Проверьте почту для подтверждения регистрации";
        }

        setLoading(false);
        return null;
    } else {
        return "Пользователь с таким email уже зарегистрирован";
    }

}