import { fetchTrecks, TrackSlider } from "@/features/track"

export default async function Home() {
  const tracks = await fetchTrecks(10)
  return (
    <>
    <div className="mt-3.5 flex flex-col gap-4">
      <p className="ml-5 font-bold text-2xl text-white">Лучшие треки</p>
      <TrackSlider tracks={tracks} />
      <p className="ml-5 font-bold text-2xl text-white">Лучшие треки</p>
      <TrackSlider tracks={tracks} />
      <p className="ml-5 font-bold text-2xl text-white">Лучшие треки</p>
      <TrackSlider tracks={tracks} />
    </div>
    </>
  )
}
