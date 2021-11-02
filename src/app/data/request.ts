import axios from 'axios';
import { API } from '../../atomic';

const endRequest = `${API.PTBR}${API.API_KEY}`

export const getNetflixOriginals = async () => {
    return await axios.get(`${API.BASE_URL}/discover/tv?dith_network=213${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getTreding = async () => {
    return await axios.get(`${API.BASE_URL}/trending/all/week?${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getTopRated = async () => {
    return await axios.get(`${API.BASE_URL}/movie/top_rated?&${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getByCategory = async (category: number) => {
    console.log(category)
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=${category}${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getActionCategory = async () => {
    console.log(`${API.BASE_URL}/discover/movie?width_genres=28${endRequest}`)
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=28${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getComedyCategory = async () => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=35${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getHorrorCategory = async () => {
    return await axios.get(`${API.BASE_URL}/discover/movie?width_genres=27${endRequest}`).then((res) => {
        return res.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export const getRomanceCategory = async () => {
    return await getByCategory(10749)
}

export const getDocumentaryCategory = async () => {
    return await getByCategory(99)
}

export const getAll = async () => {
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