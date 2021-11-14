import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledListItem } from '../../components';
import { SnackBar } from '../../components/mol.snackbar/snackbar.component';
import { ICardItem } from '../../data';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled, MainStyled, ErrorMessage } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    const [favoriteList, setFavoriteList] = React.useState<ICardItem[]>([])
    const snackbarRef = React.useRef<any| null>(null);

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
        snackbarRef.current.show();

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
            <SnackBar
                ref={snackbarRef}
                message="Item removido dos favoritos."
                type={"success"}
            />
        </ListPageContainer>
    )
}
