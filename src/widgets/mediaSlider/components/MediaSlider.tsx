"use client"
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import { Genre } from '@/shared/types';
import { Track, TrackCard } from '@/entities/track';
import SliderBtns from './SliderBtns';
import { AlbumCard } from '@/entities/album';

type Props = {
    tracks?: Track[];
    customGenres?: Genre[];
}

const MediaSlider = ({tracks, customGenres}: Props) => {
  return (
      <div className="relative">
        <Swiper
            slidesPerView="auto"
            className='w-full h-full flex group'
        >
            { tracks && tracks.map((track) => (
                <SwiperSlide className='!w-44 flex justify-center items-center first-of-type:ml-8 last-of-type:mr-8' key={track.id}>
                    <TrackCard 
                        key={track.id}
                        track={track} 
                    />
                </SwiperSlide>
            ))}

            { customGenres && customGenres.map((genre) => (
                <SwiperSlide className='!w-44 flex justify-center items-center first-of-type:ml-8 last-of-type:mr-8' key={genre.value}>
                    <AlbumCard customAlbum={genre} />
                </SwiperSlide>
            ))}
            <SliderBtns />
        </Swiper>
    </div>
  )
}

export default MediaSlider