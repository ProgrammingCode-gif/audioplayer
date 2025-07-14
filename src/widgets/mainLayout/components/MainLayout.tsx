"use client"
import { RightSideBar, useRightSideBarStore } from '@/features/rightSideBar'
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({children}: Props) => {
    const { isOpen } = useRightSideBarStore();
    return (
        <main className={`grid ${isOpen ? "grid-cols-[250px_1fr_280px]" : "grid-cols-[250px_1fr]"} h-full overflow-hidden gap-3 px-2.5`}>
            <aside className="bg-[#101010] overflow-auto rounded-md">

            </aside>
            <div className="overflow-auto bg-[#101010] rounded-md scrollbar-hide">
                {children}
            </div>
            {isOpen &&
                <aside className="bg-[#101010] rounded-md overflow-hidden">
                    <RightSideBar />
                </aside>
            }
        </main>
    )
}

export default MainLayout