import { Artist } from '@/shared/types'
import React from 'react'

type Props = {
    artist: Artist | null
}

const ArtistInfo = ({artist}: Props) => {
  return (
    <div className='bg-[#1e1e1e] mt-5 flex flex-col rounded-lg overflow-hidden min-w-[250px]'>
      <div className='relative h-50 overflow-hidden'>
        <img src={artist?.image} alt="" />
        <p className='text-white px-3 py-5 absolute top-0 left-0 font-bold w-full bg-linear-180 from-[#000000cc] to-transparent'>Об исполнителе</p>
      </div>
      <div className="flex flex-col w-full px-4 mt-3">
        <p className='text-white font-bold'>{artist?.name}</p>
        <p className=' text-neutral-400 font-bold mt-2'>Жанры: {artist?.musicinfo.tags.map(el => `${el} `)}</p>
      </div>
    </div>
  )
}

export default ArtistInfo