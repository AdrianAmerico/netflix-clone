import styled from 'styled-components'
import { padding } from '../../../atomic'

export const HeaderStyled = styled.header`
display: flex;
padding: ${padding};
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 999;
inset: 0 0 auto 0;
height: 70px;
background: transparent;
`

export const NavStyled = styled.nav`
display: flex;
justify-content: space-between;
flex: 1;
`

export const UlStyled = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
color: ${(props) => props.theme.colors.text};
list-style: none;
flex: 1;

`
export const DivLogoStyled = styled.div`
height: 25px;
`

export const DivUserLogo = styled.div`
height: 35px;
display: flex;
flex: 1;
justify-content: end;
`