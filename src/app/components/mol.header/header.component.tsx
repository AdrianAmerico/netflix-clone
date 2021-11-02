import * as React from 'react';
import { Li, USER_PROFILE } from '../../../atomic';
import { NetflixLogo } from '../mol.netflixlogo';
import { DivLogoStyled, DivUserLogo, HeaderStyled, NavStyled, UlStyled } from './header.component.style';

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <NavStyled>
                <UlStyled>
                    <DivLogoStyled>
                        <a href="/">
                            <NetflixLogo />
                        </a>
                    </DivLogoStyled>

                    <Li>Inicio</Li>
                    <Li>Séries</Li>
                    <Li>Files</Li>
                    <Li>Bombando</Li>
                    <Li>Minha lista</Li>
                </UlStyled>
            </NavStyled>

            <NavStyled>
                <UlStyled>
                    <DivUserLogo>
                        <a href="/">
                            <img src={USER_PROFILE} alt="user" style={{ borderRadius: '3px' }} />
                        </a>
                    </DivUserLogo>
                </UlStyled>
            </NavStyled>
        </HeaderStyled>
    )
}