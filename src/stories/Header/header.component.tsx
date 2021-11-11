import React from 'react';
import { HeaderStyled } from './header.component.style';

interface Props {
    isBlack: boolean
    spacing?: string | number
    size: 'small' | 'medium' | 'large'
}

export const Header: React.FC<Props> = ({ isBlack = false, children, spacing = 8, size = 'medium' }) => {
    return (
        <HeaderStyled isBlack={isBlack} spacing={spacing} size={size}>
            {children}
        </HeaderStyled>
    )
}
