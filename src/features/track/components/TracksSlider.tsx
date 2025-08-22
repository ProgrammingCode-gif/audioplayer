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
        <Swiper
            slidesPerView="auto"
            className='w-full h-full flex group'
        >
            {tracks.map((track) => (
                <SwiperSlide className='!w-44 flex justify-center items-center first-of-type:ml-8 last-of-type:mr-8' key={track.id}>
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