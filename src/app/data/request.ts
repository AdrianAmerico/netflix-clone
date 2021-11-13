import axios from 'axios';
import { API } from '../../atomic';
import { IMovie, IMovieInfo, IMovieList } from './request.component.type';

const endRequest = `${API.PTBR}${API.API_KEY}`

export enum FeatureType {
    'tv' = 'tv',
    'movie' = 'movie'
}

export const getNetflixOriginals = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/tv?dith_network=213${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getTreding = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/trending/all/week?${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getTopRated = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/movie/top_rated?&${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getActionCategory = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=28${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getComedyCategory = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=35${endRequest}&page=2`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getHorrorCategory = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=27${endRequest}&page=3`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getRomanceCategory = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=10749${endRequest}&page=4`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getDocumentaryCategory = async (): Promise<IMovie[]> => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=99${endRequest}&page=5`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getMovieInfo = async (movieId: string, type: FeatureType): Promise<IMovieInfo> => {
    return await axios.get(`${API.BASE_URL}/${type}/${movieId}?${endRequest}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}


export const getAll = async (): Promise<IMovieList[]> => {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await getNetflixOriginals()
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await getTreding()
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await getTopRated()
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await getActionCategory()
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await getComedyCategory()
        },
        {
            slug: 'horror',
            title: 'terror',
            items: await getHorrorCategory()
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await getRomanceCategory()
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await getDocumentaryCategory()
        }
    ]
}
