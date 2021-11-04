export interface IMovie {
    backdrop_path: string | null
    first_air_date: string
    genreIds: number[] | null
    id: string
    name: string
    origin_country: string[]
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    original_title: string
}

export interface IMovieList {
    slug: string
    title: string
    items: IMovie[]
}

export interface IMovieInfo {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: null
}