import { useEffect, useState } from "react";
import type { Swiper } from "swiper";

export function useSwiperLogic(swiper: Swiper) {
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const handleReachEnd = () => {
            setIsEnd(true);
        };
        const handleReachBegining = () => {
            setIsBeginning(true);
        };
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }

        swiper.on('slideChange', handleSlideChange);
        swiper.on('reachEnd', handleReachEnd);
        swiper.on('reachBeginning', handleReachBegining);

        return () => {
            swiper.off('reachEnd', handleReachEnd);
            swiper.off('reachBeginning', handleReachBegining);
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);
    
    return {isBeginning, isEnd}
}