import { Artist } from '@/entities/artist';
import React, { memo, useMemo } from 'react'

type Props = {
    artist: Artist | null
}

const ArtistInfo = ({artist}: Props) => {

  const aboutInfo = useMemo(() => {
    if (!artist || !artist.musicinfo || !artist.musicinfo.description || !artist.musicinfo.description.en) {
      return '';
    }
    return artist?.musicinfo.description.en.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }, [artist]);


  return (
    <div className='bg-[#1e1e1e] pb-5 mt-5 flex flex-col rounded-lg overflow-hidden min-w-[250px]'>
      <div className='relative h-50 overflow-hidden'>
        <img src={artist?.image} alt="" />
        <p className='text-white px-3 py-5 absolute top-0 left-0 font-bold w-full bg-linear-180 from-[#000000cc] to-transparent'>Об исполнителе</p>
      </div>
      <div className="flex flex-col w-full px-4 mt-3">
        <p className='text-white font-bold'>{artist?.name}</p>
        <p className=' text-neutral-400 font-bold mt-2'>Жанры: {artist?.musicinfo.tags.map(el => `${el} `)}</p>
        <div>
          <button className='ring-2 ring-neutral-500 text-white hover:text-white hover:ring-white transition-all duration-300 rounded-full px-4 py-2 mt-3 font-bold text-sm cursor-pointer'>
            Подписаться
          </button>
        </div>
        {
          artist?.musicinfo.description.en && 
          <div className='mt-3 text-neutral-400 line-clamp-3 font-bold text-sm'>{aboutInfo}</div>
        }
      </div>
    </div>
  )
}

export default memo(ArtistInfo)