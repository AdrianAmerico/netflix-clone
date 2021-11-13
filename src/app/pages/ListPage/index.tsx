import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledListItem } from '../../components';
import { ICardItem } from '../../data';
import { useFavorite } from '../../hooks/useFavorite';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled, MainStyled, ErrorMessage } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    // const { removeFavorite } = useFavorite()
    const [favoriteList, setFavoriteList] = React.useState<ICardItem[]>([])

    React.useEffect(() => {
        const getFavoriteItems = () => {
            const favoriteItemsJSON = localStorage.getItem('favoriteList')
            if (favoriteItemsJSON) {
                setFavoriteList(JSON.parse(favoriteItemsJSON))
            }
        }
        getFavoriteItems()
    }, [])

    const removeFavorite = (data: ICardItem) => {
        const updatedMovies = favoriteList.filter((item) => item.poster_path !== data.poster_path)!
        localStorage.setItem('favoriteList', JSON.stringify(updatedMovies))
        setFavoriteList(updatedMovies)
        console.log('removido')
    }

    return (
        <ListPageContainer>
            <Header isBlack={isBlackHeader} />
            <MainStyled>
                <DivStyled>
                    {favoriteList && favoriteList.length ?
                        favoriteList?.map((data: ICardItem, index: number) => {
                            return (
                                <StyledListItem key={index} onClick={() => removeFavorite(data)}>
                                    <img src={`${API.IMG_URL}${data.poster_path}`} alt={data.original_name} />
                                </StyledListItem>
                            )
                        }) : (
                            <ErrorMessage>
                                Você ainda não adicionou nenhum título à sua lista.
                            </ErrorMessage>
                        )}
                </DivStyled>
            </MainStyled>
            <Footer />
        </ListPageContainer>
    )
}
