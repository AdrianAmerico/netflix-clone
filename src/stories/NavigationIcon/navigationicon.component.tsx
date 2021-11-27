import * as React from 'react'
import { DivNavigateIconStyled } from './navigationicon.component.style'

interface Props {
    /**
    * You can choose which way the arrow will point
    */
    side: 'left' | 'right'
    /**
    * if you wanted a new color, enter the hexagonal code, example: "#333"
    */
    color?: string
    onClick?: () => void
}

export const NavigationIcon = ({ side = 'left', color, onClick = () => {} }: Props) => {
  const sides = {
    left: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    right: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'

  }

  const arrowDirectionSwitch = side === 'left' ? sides.left : sides.right
  return (
        <DivNavigateIconStyled side={side} onClick={onClick}>
            <svg
                viewBox="0 0 24 24"
            >
                <path
                    d={arrowDirectionSwitch}
                    fill={color || '#fff'} />
            </svg>
        </DivNavigateIconStyled>
  )
}
