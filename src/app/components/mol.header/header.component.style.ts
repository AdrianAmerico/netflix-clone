import styled from 'styled-components'
import { fontSize, spacing } from '../../../atomic'

interface Props {
    isBlack: boolean
}

export const HeaderStyled = styled.header<Props>`
display: flex;
padding: ${spacing.padding};
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 999;
inset: 0 0 auto 0;
height: 70px;
transition: ease all 0.5s;
background: ${(props) => props.isBlack ? props.theme.colors.background_primary : 'transparent'};
`

export const NavStyled = styled.nav`
display: flex;
justify-content: space-between;
flex: 1;
@media(max-width: 400px){
    font-size: ${fontSize.xxSmall};
}
`

export const NavleftStyled = styled(NavStyled)`
@media(max-width: 768px){
    justify-content: space-around;
    flex: 2;
}
`

export const UlStyled = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
color: ${(props) => props.theme.colors.text};
list-style: none;
flex: 1;
`
export const DivLogoStyled = styled.div`
height: 25px;

@media(max-width: 350px){
    height: 20px;
}
`

export const DivUserLogo = styled.div`
height: 35px;
display: flex;
flex: 1;
justify-content: end;
`
export const Divider = styled.div`
flex: 1;
@media(max-width: 768px){
    display: none;
}
`