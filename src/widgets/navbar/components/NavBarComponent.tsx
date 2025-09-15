'use client'

import Link from "next/link"
import SearchBar from "../../../shared/ui/SearchBar/SearchBar"
import { PiHouseFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
  import { useUserStore } from "@/entities/user/model/store";
import { logOut } from "@/features/auth/model/logOut";
import AccountMenu from "./AccountMenu";

const NavBarComponent = () => {
  const { user } = useUserStore();
  return (
    <header>
      <nav className="w-full bg-black text-neutral-100 px-7 py-3 flex justify-between items-center z-20">
        <FaSpotify className="size-8" />
        <div className="flex items-center gap-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3">
            <Link href="/" className="bg-[#1e1e1e] p-2.5 rounded-full flex jcenter items-center hover:bg-[#242424] transition-colors duration-300">
              <PiHouseFill className="size-6 text-white" />
            </Link>
            <SearchBar />
          </div>
        </div>
          {user ?
          <AccountMenu user={user} />:
        <div className="flex items-center gap-4 ">
          <Link href="/signup" className="text-neutral-500 text-sm font-bold hover:text-white hover:scale-105 transition-all duration-150">
            Зарегистрироваться
          </Link>
          <Link href="/login" className="bg-white text-black px-7 py-2 rounded-full flex jcenter items-center hover:scale-105 hover:bg-[#e9e9e9] transition-all duration-100 font-bold">
            Войти
          </Link>
        </div>
        }
      </nav>
    </header>
  )
}

export default NavBarComponent