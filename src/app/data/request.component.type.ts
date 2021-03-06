/* eslint-disable camelcase */
export interface IMovie {
    original_name: string;
    id: string
    name: string
    origin_country: string[]
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_count: number
    original_title: string
}

type GenresArray = {
    id: number
    name: string
}
export interface IMovieList {
    slug: string
    title: string
    items: IMovie[]
}

export interface IMovieInfo {
    original_name: string
    backdrop_path: string
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: null
    first_air_date: string
    vote_average: number
    number_of_seasons: number
    overview: string
    genres: GenresArray[]
    poster_path: string
}

export interface ICardItem {
    original_name: string
    poster_path: string
}
