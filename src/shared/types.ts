export type Artist = {
    id: number;
    name: string;
    website: string;
    joindate: string;
    image: string;
    musicinfo: {
        tags: string[];
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
    };
}

export type Genre = {
    name: string;
    value: string;
    image: string;
}