/* eslint-disable camelcase */
import * as React from 'react'
import { API } from '../../../atomic'
import { IMovieList } from '../../data'
import { Card, StyledList, StyledListItem, CategoryContainer, NavigationOverflow } from '.'
import { NavigationIcon } from '../../../stories'
import { SnackBar } from '../mol.snackbar/snackbar.component'
import { useFavorite } from '../../hooks/useFavorite'

interface Props {
    title: string;
    item: IMovieList;
}

export const CategoryRow = ({ title, item }: Props) => {
  const [scrollX, setSctrollX] = React.useState<number>(0)
  const snackbarRef = React.useRef<any | null>(null)
  const { addFavorite } = useFavorite(snackbarRef)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setSctrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
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
            <NavigationOverflow style={{ overflow: 'auto' }}>
                <Card size={item?.items?.length * 150}>
                    <StyledList margin={scrollX}>
                        {item?.items?.map((data, index: number) => {
                          const {
                            poster_path,
                            original_title
                          } = data
                          return (
                                <StyledListItem
                                    key={index}
                                    onClick={() =>
                                      addFavorite({
                                        poster_path,
                                        original_name: original_title || data.original_name
                                      })}
                                >
                                    <img src={`${API.IMG_URL}${poster_path}`} alt={data.original_title} />
                                </StyledListItem>
                          )
                        })}
                    </StyledList>
                </Card>
            </NavigationOverflow>
            <SnackBar
                ref={snackbarRef}
            />
        </CategoryContainer>
  )
}
