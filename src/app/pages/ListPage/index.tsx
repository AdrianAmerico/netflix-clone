import React from 'react';
import { API } from '../../../atomic';
import { Footer, Header, StyledList, StyledListItem } from '../../components';
import { useBlackHeader } from '../../hooks/useBlackHeader';
import { ListPageContainer, DivStyled } from './listpage.component.style';

export const ListPage = () => {
    const { isBlackHeader } = useBlackHeader()
    const item = [
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

    return (
        <ListPageContainer>
            <Header isBlack={isBlackHeader} />
            <DivStyled style={{ flex: 1, padding: '10% 4%' }}>
                <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: "center", transition: 'all 0.2s ease', flexWrap: 'wrap' }}>
                    {item?.map((data: any, index: number) => {
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
