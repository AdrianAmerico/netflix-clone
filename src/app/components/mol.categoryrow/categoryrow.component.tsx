import * as React from 'react'
import { API } from '../../../atomic'
import { IMovie, IMovieList } from '../../data'
import { NavigateLeftIcon, NavigateRightIcon } from '../'
import { Card, StyledList, StyledListItem, CategoryContainer, DivNavigateIconStyled } from '.'

interface Props {
    title: string;
    item: IMovieList;
}

export const CategoryRow = ({ title, item }: Props) => {
    const [scrollX, setSctrollX] = React.useState<number>(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setSctrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        const listWidth = item?.items?.length * 150
        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth)
        }
        setSctrollX(x)
    }

    return (
        <CategoryContainer>
            <h2>{title}</h2>
            <DivNavigateIconStyled side="left" onClick={handleLeftArrow}>
                <NavigateLeftIcon />
            </DivNavigateIconStyled>

            <DivNavigateIconStyled side="right" onClick={handleRightArrow}>
                <NavigateRightIcon />
            </DivNavigateIconStyled>

            <Card size={item?.items?.length * 150}>
                <StyledList margin={scrollX}>
                    {item?.items?.map((data: IMovie, index: number) => {
                        return (
                            <StyledListItem key={index}>
                                <img src={`${API.IMG_URL}${data.poster_path}`} alt={data.original_title} />
                            </StyledListItem>
                        )
                    })}
                </StyledList>
            </Card>
        </CategoryContainer>
    )
}
