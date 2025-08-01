import { Player } from "@/features/player"
import { fetchTrecks, TrackCard } from "@/features/track"

export default async function Home() {
  const tracks = await fetchTrecks(10)
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
      <div className="col-span-full text-center mt-6">
        <p className="text-gray-500">End of tracks</p>
      </div>
    </div>
    </>
  )
}
