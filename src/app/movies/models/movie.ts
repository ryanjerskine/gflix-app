import { Genre } from "./genre";

export class Movie {
    Id: number;
    TMDbId: number;
    IMDBId: string;

    Title: string;
    Year: number;
    Runtime: string;
    Rating: string;
    ImdbScore: string;
    Summary: string;

    PosterUrl: string;
    BackdropUrl: string;

    Genres: Genre[];

    Watched: boolean;
    ProgressPercentage: number;
}