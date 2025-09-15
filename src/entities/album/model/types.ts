export type Album = {
    id: string;
    name: string;
    releasedate: string; // "YYYY-MM-DD"
    artist_id: string;
    artist_name: string;
    image: string; // ссылка на обложку (можно менять размер query-параметром)
    zip: string; // ссылка на zip (если zip_allowed = true)
    zip_allowed: boolean;
}