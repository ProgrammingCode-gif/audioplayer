'use client'

import Link from "next/link"
import SearchBar from "../../../shared/ui/SearchBar/SearchBar"
import { PiHouseFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <header>
      <nav className="w-full bg-black text-neutral-100 pl-7 p-2 flex justify-between items-center z-20">
        <FaSpotify className="size-8" />
        <div className="flex items-center gap-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3">
            <Link href="/" className="bg-neutral-800 p-2.5 rounded-full flex jcenter items-center hover:bg-[#2f2f2f] transition-colors duration-300">
              <PiHouseFill className="size-6 text-white" />
            </Link>
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <NavBarLink path="/signup" text="Зарегистрироваться" />
          <Link href="/login" className="bg-white text-black px-8 py-3 rounded-full flex jcenter items-center hover:scale-105 hover:bg-[#e9e9e9] transition-all duration-100 font-bold">
            Войти
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar