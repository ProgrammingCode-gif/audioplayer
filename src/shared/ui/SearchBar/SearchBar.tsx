'use client'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { BsBoombox } from "react-icons/bs";

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => {
        setIsActive(true);
    };

    return (
        <div
            className={`px-4.5 relative ${isActive ? 'ring-2 ring-white' : 'ring-transparent'}  w-md transition-all duration-300 rounded-full overflow-hidden flex items-center bg-neutral-800 text-gray-200 hover:bg-[#2f2f2f] focus-within:ring-2 focus-within:ring-white`}>
            <FiSearch className='size-6 text-neutral-400' />
            <input
                onBlur={() => setIsActive(false)}
                onFocus={handleFocus}
                className=" ml-2 py-2 text-lg w-full outline-0"
                type="text"
                placeholder="Поиск музыки" />
            <div className="relative before:content-[''] before:absolute before:top-0 before:-left-5 before:w-px before:h-full before:bg-neutral-600">
                <BsBoombox className="relative size-6 text-neutral-400 ml-auto cursor-pointer hover:text-neutral-200 transition-all duration-300" />
            </div>
        </div>
    )
}

export default SearchBar