import * as React from 'react'
import { API } from '../../../atomic'
import { Card, StyledList, StyledListItem, CategoryContainer } from './categoryrow.component.style'

interface Props {
    title: string;
    item: any
}

export const CategoryRow = ({ title, item }: Props) => {
    return (
        <CategoryContainer>
            <h2>{title}</h2>
            <Card>
                <StyledList>
                    {item?.items?.map((data: any, index: number) => {
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
