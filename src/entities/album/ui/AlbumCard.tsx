import React from 'react'
import { Album } from '../model/types'
import { Genre } from '@/shared/types';

type Props = {
    album?: Album;
    customAlbum?: Genre;
}

const AlbumCard = ({album, customAlbum} : Props) => {
  return (
    <div>
        <div className='w-36 h-36 rounded-lg'/>
        <p className="font-bold text-sm line-clamp-1 text-neutral-400 mt-2">{album ? album.name : customAlbum?.name}</p>
        { album && <p className="font-bold text-sm text-neutral-500 line-clamp-1">{album?.artist_name}</p> }
    </div>
  )
}

export default AlbumCard