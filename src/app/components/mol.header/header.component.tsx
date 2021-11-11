import * as React from 'react';
import { Li, USER_PROFILE } from '../../../atomic';
import { NetflixLogo } from '..';
import { DivLogoStyled, DivUserLogo, NavStyled, UlStyled, Divider, NavleftStyled } from '.';
import { HeaderCustom } from '../../../stories/Header'
interface Props {
    isBlack: boolean
}

export const Header = ({ isBlack }: Props) => {
    return (
        <HeaderCustom isBlack={isBlack} size='medium' spacing='2% 4%'>
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
            <Divider />
            <NavStyled>
                <UlStyled>
                    <DivUserLogo>
                        <a href="/">
                            <img src={USER_PROFILE} alt="user" style={{ borderRadius: '3px' }} />
                        </a>
                    </DivUserLogo>
                </UlStyled>
            </NavStyled>
        </HeaderCustom>
    )
}