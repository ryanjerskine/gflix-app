import { TvSeason } from "./tvseason";

export class TvShow {
    Id: number;
    TTVDbId: number;
    IMDBId: string;
    Title: string;
    YearRange: string;
    Rating: string;
    ImdbScore: string;
    Summary: string;
    PosterUrl: string;
    BackdropUrl: string;
    Seasons: TvSeason[];
}