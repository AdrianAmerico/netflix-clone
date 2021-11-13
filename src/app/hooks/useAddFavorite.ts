import React from 'react';
import { ICardItem } from '../data';

export const useAddFavorite = () => {
    const [favoriteList, setFavoriteList] = React.useState<any[]>([])

    React.useEffect(() => {
        const localS = localStorage.getItem('favoriteList')
        if (localS) {
            const fdkfdk = JSON.parse(localS)
            setFavoriteList(fdkfdk)
        } else {
            localStorage.setItem('favoriteList', JSON.stringify([]))
        }
    }, [])

    const addFavorite = (data: ICardItem) => {
        const {
            original_name,
            poster_path } = data

        const newItem = {
            original_name,
            poster_path
        }

        const movieValidate = favoriteList.find((item) => item.poster_path === poster_path)
        if (!movieValidate) {
            const aaaa = [...favoriteList, newItem]
            setFavoriteList(aaaa)
            localStorage.setItem('favoriteList', JSON.stringify(aaaa))
        } else {
            console.log("Este filme já está em seus favoritos")
        }
    }
    return { addFavorite }
}
