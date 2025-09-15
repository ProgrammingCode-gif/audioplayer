// import { fetchTrecks, fetchTrecksByGenre, TrackSlider } from "@/features/track"
import { fetchTrecks, fetchTrecksByGenre } from "@/entities/track"
import { GENRES } from "@/shared/constants/genres"
import { MediaSlider } from "@/widgets/mediaSlider"

export default async function Home() {
  const tracks = await fetchTrecks(10)
  const rockTracks = await fetchTrecksByGenre('rock')
  return (
    <>
    <div className="mt-3.5 flex flex-col gap-4">
      <p className="ml-5 font-bold text-2xl text-white">Лучшие треки</p>
      <MediaSlider tracks={tracks} />
      <p className="ml-5 font-bold text-2xl text-white">Рок треки</p>
      {rockTracks != null && 
        <MediaSlider tracks={rockTracks} />
      }
      <p className="ml-5 font-bold text-2xl text-white">Лучшие треки</p>
      <MediaSlider tracks={tracks} />
    </div>
    </>
  )
}
