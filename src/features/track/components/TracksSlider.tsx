"use client"
import React, { useEffect } from 'react'
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css';
import { Track } from '@/shared/types';
import TrackCard from './TrackCard';
import SliderBtns from './SliderBtns';

type Props = {
    tracks: Track[]
}

const TracksSlider = ({tracks}: Props) => {
  return (
      <div className="relative">
        {/* <div className=" w-15 h-full absolute top-0 left-0 bg-gradient-to-r from-10% from-[#101010] to-100% to-transparent z-30"></div>
        <div className=" w-15 h-full absolute right-0 top-0 bg-gradient-to-r from-0% from-transparent to-90% to-[#101010] z-30"></div> */}
        <Swiper
            slidesPerView="auto"
            className='w-full h-full flex group'
        >
            {tracks.map((track) => (
                <SwiperSlide className='!w-44 !h-[300px] flex justify-center items-center' key={track.id}>
                    <TrackCard 
                        key={track.id}
                        track={track} 
                    />
                </SwiperSlide>
            ))}
            <SliderBtns />
        </Swiper>
    </div>
  )
}

export default TracksSlider