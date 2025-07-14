"use client"

import { Track } from '@/shared/types'
import React, { useEffect, useState } from 'react'
import { AiFillRightSquare } from "react-icons/ai";

type Props = {
    track: Track | null
    sideBarRef: React.RefObject<HTMLDivElement | null>
}

const TopInfo = ({ track, sideBarRef }: Props) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(sideBarRef.current) {
                const scrollTop = sideBarRef.current.scrollTop
                setScrolled(scrollTop > 0)
            }
        }
        const currentRef = sideBarRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        }
    }, [sideBarRef])

    return (
        <div className={`py-5 px-4 bg-[#101010] flex items-center sticky top-0 left-0 w-full transition-shadow duration-200 ${scrolled ? "shadow-[#000000e1] shadow-lg/100" : ""}`}>
            <button>
                <AiFillRightSquare size={20} className='text-white hidden group-hover:block hover:text-[#f9e16a] transition-colors duration-200' />
            </button>
            <p className='text-white font-bold'>{track?.name}</p>
        </div>
    )
}

export default TopInfo