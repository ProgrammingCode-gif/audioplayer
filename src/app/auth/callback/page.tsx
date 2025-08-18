// src/app/auth/callback/page.tsx
"use client"

import { useEffect } from "react"
import { supabase } from '@/lib/supabase/supabaseClient'
import { useRouter } from "next/navigation"
import { useUserStore } from "@/entities/user/model/store"

const AuthCallback = () => {
  const router = useRouter()
  const { setUser } = useUserStore()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      console.log(user);
      
      if(!user) return

      const {data: profile} = await supabase.from("profiles").select("username, avatar_url").eq("id", user.id).single()
      if (profile && profile.username) {
        setUser({
          ...user,
          username: profile.username,
          avatarUrl: profile.avatar_url
        })
      } else {
        const username = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Пользователь'
        const avatarUrl = user.user_metadata?.avatar_url || null

        await supabase.from("profiles").update({
          username: username,
          avatar_url: avatarUrl
        }).eq("id", user.id)
        console.log("Профиль пользователя обновлен:", username, avatarUrl);
        setUser({...user, username: username, avatarUrl: avatarUrl})
        router.push("/")
      }
    }
    getUser()
  }, [router, setUser])

  return (
    <div className="text-white">Загрузка...</div>
  )
}

export default AuthCallback