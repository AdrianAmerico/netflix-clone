import * as React from 'react';
import { HeaderStyled, NavStyled, UlStyled } from './header.component.style';

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <NavStyled>
                <UlStyled>
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Files</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </UlStyled>
            </NavStyled>

            <NavStyled>
                <UlStyled>
                    <li>aaaaa</li>
                </UlStyled>
            </NavStyled>
        </HeaderStyled>
    )
}