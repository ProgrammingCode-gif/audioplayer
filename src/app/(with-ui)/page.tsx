import { Player } from "@/features/player"
import { fetchTrecks, TrackCard, TrackSlider } from "@/features/track"

export default async function Home() {
  const tracks = await fetchTrecks(10)
  return (
    <>
    <div>
      <TrackSlider tracks={tracks} />
    </div>
    </>
  )
}
