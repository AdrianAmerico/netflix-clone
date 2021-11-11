import React from 'react';
import { HeaderStyled } from './header.component.style';

interface Props {
    isBlack: boolean
    spacing?: string
    size: 'small' | 'medium' | 'large'
}

export const HeaderCustom: React.FC<Props> = ({ isBlack = false, children, spacing = '8px', size = 'medium' }) => {
    return (
        <HeaderStyled isBlack={isBlack} spacing={spacing} size={size}>
            {children}
        </HeaderStyled>
    )
}
