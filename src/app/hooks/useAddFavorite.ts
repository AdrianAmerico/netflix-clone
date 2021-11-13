import React from 'react';
import { ICardItem } from '../data';

export const useAddFavorite = () => {
    const [favoriteList, setFavoriteList] = React.useState<ICardItem[]>([])

    React.useEffect(() => {
        const localS = localStorage.getItem('favoriteList')
        if (localS) {
            const favoriteItems = JSON.parse(localS)
            setFavoriteList(favoriteItems)
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
            const favoriteArr = [...favoriteList, newItem]
            setFavoriteList(favoriteArr)
            localStorage.setItem('favoriteList', JSON.stringify(favoriteArr))
        } else {
            console.log("Este filme já está em seus favoritos")
        }
    }
    return { addFavorite }
}
