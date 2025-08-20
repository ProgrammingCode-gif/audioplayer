import React from 'react'
import { useSwiper } from 'swiper/react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const SliderBtns = () => {
    const swiper = useSwiper();
    return (
        <>
            <div className="flex flex-col justify-center items-center w-15 h-full absolute top-0 left-0 bg-gradient-to-r from-0% from-[#101010] to-100% to-transparent z-30">
                <button className='-left-11/12 absolute flex justify-center items-center cursor-pointer text-white w-8 h-8 bg-neutral-900 rounded-full group-hover:left-5 transition-all duration-200' 
                    onClick={() => swiper.slidePrev()}
                >
                    <GrPrevious size={18} />
                </button>
            </div>
            <div className="flex flex-col justify-center items-center w-15 h-full absolute right-0 top-0 bg-gradient-to-r from-0% from-transparent to-100% to-[#101010] z-30">
                <button className='-right-11/12 absolute flex justify-center items-center cursor-pointer text-white w-8 h-8 bg-neutral-900 rounded-full group-hover:right-5 transition-all duration-200' 
                    onClick={() => swiper.slideNext()}
                >
                    <GrNext size={18} />
                </button>
            </div>
        </>
    )
}

export default SliderBtns