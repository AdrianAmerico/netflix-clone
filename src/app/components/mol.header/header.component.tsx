import * as React from 'react';
import { Li, USER_PROFILE } from '../../../atomic';
import { NetflixLogo } from '..';
import { DivLogoStyled, DivUserLogo, NavStyled, UlStyled, Divider, NavleftStyled } from '.';
import { HeaderCustom } from '../../../stories/Header'
import { useHistory } from 'react-router-dom'
import { routes } from '../../pages/routes';
interface Props {
    isBlack: boolean
}

export const Header = ({ isBlack }: Props) => {
    const history = useHistory()
    return (
        <HeaderCustom isBlack={isBlack} size='medium' spacing='2% 4%'>

            <NavleftStyled>
                <UlStyled>
                    <DivLogoStyled onClick={() => history.push(routes.base)}>
                        <NetflixLogo />
                    </DivLogoStyled>
                    <Li onClick={() => history.push(routes.listPage)}>Minha lista</Li>
                </UlStyled>
            </NavleftStyled>

            <Divider />

            <NavStyled>
                <UlStyled>
                    <DivUserLogo>
                        <img src={USER_PROFILE} alt="user" style={{ borderRadius: '3px' }} />
                    </DivUserLogo>
                </UlStyled>
            </NavStyled>
        </HeaderCustom>
    )
}