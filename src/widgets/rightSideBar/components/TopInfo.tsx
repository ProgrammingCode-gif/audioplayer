"use client"

import { Track } from '@/entities/track';
import { motion } from 'motion/react';
import React, { memo, useEffect, useState } from 'react'
import { TbArrowBarRight } from "react-icons/tb";
type Props = {
    track: Track | null
    sideBarRef: React.RefObject<HTMLDivElement | null>
    hovered: boolean
    close: () => void
}

const TopInfo = memo(({ track, sideBarRef, hovered, close }: Props) => {
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
        <div className={`z-20 py-5 px-4 bg-[#101010] flex items-center sticky top-0 left-0 w-full transition-shadow duration-200 ${scrolled ? "shadow-[#000000c6] shadow-lg/100" : ""}`}>
                        
            <motion.div
                initial={{ width: 24 , opacity: 0, x: -20 }}
                animate={{ width: 24, opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mr-2 flex items-center"
            >
                <button
                onClick={close}
                className="text-white hover:text-[#f9e16a] cursor-pointer">
                    <TbArrowBarRight size={20} />
                </button>
            </motion.div>

            <motion.p
                animate={{ x: hovered ? 0 : -30 }}
                transition={{ duration: 0.2 }}
                className="text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis"
            >
                {track?.name}
            </motion.p>

        </div>
    )
})

export default TopInfo