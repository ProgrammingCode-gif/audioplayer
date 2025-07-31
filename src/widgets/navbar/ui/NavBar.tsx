'use client'

import Link from "next/link"
import SearchBar from "../../../shared/ui/SearchBar/SearchBar"
import { PiHouseFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
import { AuthBtns } from "@/features/auth";

const NavBar = () => {
  return (
    <header>
      <nav className="w-full bg-black text-neutral-100 pl-7 p-2 flex justify-between items-center z-20">
        <FaSpotify className="size-8" />
        <div className="flex items-center gap-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3">
            <Link href="/" className="bg-[#1e1e1e] p-2.5 rounded-full flex jcenter items-center hover:bg-[#242424] transition-colors duration-300">
              <PiHouseFill className="size-6 text-white" />
            </Link>
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <AuthBtns />
        </div>
      </nav>
    </header>
  )
}

export default NavBar