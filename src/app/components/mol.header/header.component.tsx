import * as React from 'react';
import { Li, USER_PROFILE } from '../../../atomic';
import { NetflixLogo } from '..';
import { DivLogoStyled, DivUserLogo, HeaderStyled, NavStyled, UlStyled, Divider,NavleftStyled } from '.';
interface Props {
    isBlack: boolean
}

export const Header = ({ isBlack }: Props) => {
    return (
        <HeaderStyled isBlack={isBlack}>
            <NavleftStyled>
                <UlStyled>
                    <DivLogoStyled>
                        <a href="/">
                            <NetflixLogo />
                        </a>
                    </DivLogoStyled>

                    <Li>Inicio</Li>
                    <Li>Minha lista</Li>
                </UlStyled>
            </NavleftStyled>
           <Divider/>
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