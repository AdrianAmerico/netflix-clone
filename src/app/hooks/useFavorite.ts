/* eslint-disable camelcase */
import React from 'react'
import { GlobalContext } from '../context'
import { ICardItem } from '../data'

export const useFavorite = (ref: React.MutableRefObject<any>) => {
  const [favoriteList, setFavoriteList] = React.useState<ICardItem[]>([])
  const { setMessage, setType } = React.useContext(GlobalContext)

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
    const { original_name, poster_path } = data

    const newItem = {
      original_name,
      poster_path
    }

    const movieValidate = favoriteList.find(
      (item) => item.poster_path === poster_path
    )
    if (!movieValidate) {
      const favoriteArr = [...favoriteList, newItem]
      setFavoriteList(favoriteArr)
      localStorage.setItem('favoriteList', JSON.stringify(favoriteArr))
      setType('success')
      setMessage('O item foi adicionado aos favoritos')
      ref.current.show()
    } else {
      setType('fail')
      setMessage('Este filme já está em seus favoritos')
      ref.current.show()
    }
  }

  const removeFavorite = (
    data: ICardItem,
    items: ICardItem[],
    setItems: React.Dispatch<React.SetStateAction<ICardItem[]>>
  ) => {
    const updatedMovies = items.filter(
      (item) => item.poster_path !== data.poster_path
    )!
    localStorage.setItem('favoriteList', JSON.stringify(updatedMovies))
    setItems(updatedMovies)
    ref.current.show()
    setMessage('Item removido com sucesso')
    setType('success')
  }

  const watchMovie = () => {
    setType('fail')
    setMessage('Função não desenvolvida.')
    ref.current.show()
  }

  return { addFavorite, watchMovie, removeFavorite }
}
