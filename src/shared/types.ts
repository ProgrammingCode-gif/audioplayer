export type Track = {
    id: number;
    name: string;
    artist_name: string;
    artist_id: number; // ID of the artist
    album_name: string;
    duration: number; // in seconds
    audio: string; // URL to the audio file
    cover: string; // URL to the cover image
    release_date: string; // ISO date format
    genre: string; // Genre of the track
    explicit: boolean; // Whether the track is explicit or not
    image: string; // URL to the image
}
export type Artist = {
    id: number;
    name: string;
    website: string;
    joindate: string;
    image: string;
    musicinfo: {
        tags: string[];
    };
    description: {
        en: string
        fr: string
        es: string
        de: string
        pl: string
        it: string
        ru: string
        pt: string
        ja: string
    }
}