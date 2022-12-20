interface KinopoiskMovie {
    name: string,
    year: number,
    country: string,
    tagline: string,
    genre: string[],
    time: string
}

export default class Movie implements KinopoiskMovie {
    name: string;
    year: number;
    country: string;
    tagline: string;
    genre: string[];
    time: string;

    constructor(name: string, year: number, country: string, tagline: string, genre: string[], time: string) {
        this.name = name;
        this.year = year;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.time = time;
    }
}