import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledListItem } from '../../components';
import { ICardItem } from '../../data';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    const [favoriteList, setFavoriteList] = React.useState<any[]>([])
    const item: ICardItem[] = [
        {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        },
        {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        }, {
            backdrop_path: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
            original_title: "Chucky",
            poster_path: "/iF8ai2QLNiHV4anwY1TuSGZXqfN.jpg"
        },

    ]

    React.useEffect(() => {
        const test = () => {
            const favoriteItemsJSON = localStorage.getItem('favoriteList')
            if (favoriteItemsJSON) {
                const converted = (JSON.parse(favoriteItemsJSON))
                setFavoriteList([...favoriteList, converted])
            }
            console.log(favoriteList)
        }
        test()
    }, [])

    return (
        <ListPageContainer>
            <Header isBlack={isBlackHeader} />
            <DivStyled style={{ flex: 1, padding: '10% 4%' }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: "center", transition: 'all 0.2s ease', flexWrap: 'wrap' }}>
                    {favoriteList?.map((data: any, index: number) => {
                        return (
                            <StyledListItem key={index}>
                                <img src={`${API.IMG_URL}${data.poster_path}`} alt={data.original_title} />
                            </StyledListItem>
                        )
                    })}
                </div>
            </DivStyled>
            <Footer />
        </ListPageContainer>
    )
}
