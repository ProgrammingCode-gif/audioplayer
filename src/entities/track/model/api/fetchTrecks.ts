import { jamendoFetch } from "@/lib/jamedo/client";
import { Track } from "../types";

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
        const tracks = await jamendoFetch<Track[]>(endpoint, params);
        return tracks;
    } catch (error) {
        console.error("Failed to fetch tracks:", error);
        throw error;
    }
}

export async function fetchTreckById(id: string): Promise<Track | null> {
    const endpoint = 'tracks'
    const params = {
        id: id,
        include: 'musicinfo',
        audioformat: 'mp31', 
        imagesize: 500,
    }

    try {
        const tracks = await jamendoFetch<Track[]>(endpoint, params);
        return tracks.length > 0 ? tracks[0] : null;
    } catch (error) {
        console.error("Failed to fetch track by ID:", error);
        throw error;
    }
}

export async function fetchTrecksByGenre(genre: string): Promise<Track[] | null> {
    const endpoint = 'tracks'
    const params = {
        tags: genre,
        order: 'popularity_total',
        include: 'musicinfo',
        audioformat: 'mp31',
        imagesize: 500,
        limit: 15
    }

    try {
        const tracks = await jamendoFetch<Track[]>(endpoint, params)
        return tracks.length > 0 ? tracks : null;
    } catch (error) {
        console.error("Failed to fetch tracks by genre:", error);
        throw error;
    }
}