import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledListItem } from '../../components';
import { ICardItem } from '../../data';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled, MainStyled } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    const [favoriteList, setFavoriteList] = React.useState<ICardItem[] | void>()

    React.useEffect(() => {
        const getFavoriteItems = () => {
            const favoriteItemsJSON = localStorage.getItem('favoriteList')
            if (favoriteItemsJSON) {
                setFavoriteList(JSON.parse(favoriteItemsJSON))
            }
        }
        getFavoriteItems()
    }, [])

    return (
        <ListPageContainer>
            <Header isBlack={isBlackHeader} />
            <MainStyled>
                <DivStyled>
                    {favoriteList && favoriteList.length ?
                        favoriteList?.map((data: ICardItem, index: number) => {
                            console.log(data)
                            return (
                                <StyledListItem key={index}>
                                    <img src={`${API.IMG_URL}${data.poster_path}`} alt={data.original_name} />
                                </StyledListItem>
                            )
                        }) : <div>Sua lista está vazia</div>}
                </DivStyled>
            </MainStyled>
            <Footer />
        </ListPageContainer>
    )
}
