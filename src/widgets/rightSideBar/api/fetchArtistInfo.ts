import { jamendoFetch } from "@/lib/jamedo/client";

export async function fetchArtistIfo(artistId: number) {
    try {
        const artist = await jamendoFetch<any>(`artists/musicinfo?id=${artistId}`)
        return artist[0]
    } catch (error) {
        console.error("Failed to fetch artist info:", error);
        throw error;
    }
}