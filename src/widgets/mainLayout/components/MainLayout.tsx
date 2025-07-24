"use client"
import { RightSideBar, useRightSideBarStore } from '@/features/rightSideBar'
import { AnimatePresence, motion } from 'motion/react'
import React, { memo } from 'react'

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({children}: Props) => {
    const { isOpen } = useRightSideBarStore();

    return (
        <main className="flex h-full overflow-hidden gap-3 px-2.5">
            <aside className="bg-[#101010] w-[250px] overflow-auto rounded-md">
            </aside>

            <div className="flex-1 overflow-auto bg-[#101010] rounded-md scrollbar-hide">
                {children}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 280, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="bg-[#101010] rounded-md overflow-hidden"
                    >
                        <RightSideBar />
                    </motion.aside>
                )}
            </AnimatePresence>
        </main>
    );
}

export default memo(MainLayout)