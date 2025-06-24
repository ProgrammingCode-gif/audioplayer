export type Track = {
    id: number;
    title: string;
    artist_name: string;
    album_name: string;
    duration: number; // in seconds
    audio: string; // URL to the audio file
    cover: string; // URL to the cover image
    release_date: string; // ISO date format
    genre: string; // Genre of the track
    explicit: boolean; // Whether the track is explicit or not
}