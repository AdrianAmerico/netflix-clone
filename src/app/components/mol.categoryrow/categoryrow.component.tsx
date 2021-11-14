import * as React from 'react'
import { API } from '../../../atomic'
import { ICardItem, IMovieList } from '../../data'
import { Card, StyledList, StyledListItem, CategoryContainer, NavigationOverflow } from '.'
import { NavigationIcon } from '../../../stories'
import { AddIcon } from '..'

interface Props {
    title: string;
    item: IMovieList;
    addFavorite: (data: ICardItem) => void
}

export const CategoryRow = ({ title, item, addFavorite }: Props) => {
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
            <NavigationIcon side='left' onClick={handleLeftArrow} />

            <NavigationIcon side="right" onClick={handleRightArrow} />
            <NavigationOverflow style={{ overflow: "auto" }}>
                <Card size={item?.items?.length * 150}>
                    <StyledList margin={scrollX}>
                        {item?.items?.map((data, index: number) => {
                            const {
                                poster_path,
                                original_title
                            } = data
                            return (
                                <StyledListItem key={index}
                                    onClick={() =>
                                        addFavorite({
                                            poster_path,
                                            original_name: original_title ? original_title : data.original_name
                                        })}
                                >
                                    <img src={`${API.IMG_URL}${poster_path}`} alt={data.original_title} />
                                    {/* <div>
                                    <AddIcon />
                                </div> */}
                                </StyledListItem>
                            )
                        })}
                    </StyledList>
                </Card>
            </NavigationOverflow>
        </CategoryContainer >
    )
}
