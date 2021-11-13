import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledListItem } from '../../components';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    const [favoriteList, setFavoriteList] = React.useState<any[] | void>()

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
            <DivStyled style={{ flex: 1, padding: '10% 4%' }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: "center", transition: 'all 0.2s ease', flexWrap: 'wrap' }}>
                    {favoriteList && favoriteList.length ?
                        favoriteList?.map((data: any, index: number) => {
                            console.log(data)
                            return (
                                <StyledListItem key={index}>
                                    <img src={`${API.IMG_URL}${data.poster_path}`} alt={data.original_name} />
                                </StyledListItem>
                            )
                        }) : <div>Sua lista está vazia</div>}
                </div>
            </DivStyled>
            <Footer />
        </ListPageContainer>
    )
}
