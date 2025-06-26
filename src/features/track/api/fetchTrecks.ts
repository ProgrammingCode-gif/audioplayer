import { Track } from '../../../shared/types'
import { jamendoFetch } from "@/lib/jamedo/client";

export async function fetchTrecks(limit: number = 10): Promise<Track[]> {
    const endpoint = 'tracks'
    const params = {
        limit: limit,
        order: 'popularity_total',
        include: 'musicinfo',
        audioformat: 'mp31', 
        imagesize: 500,
    }

    try {
        const trecks = await jamendoFetch<Track[]>(endpoint, params);
        return trecks;
    } catch (error) {
        console.error("Failed to fetch tracks:", error);
        throw error;
    }
}