import styled from 'styled-components'
import { padding } from '../../../atomic'

export const HeaderStyled = styled.header`
display: flex;
align-items: center;
height: 70px;
width: 100%;
padding: ${padding};
justify-content: space-between;
`
export const NavStyled = styled.nav`
display: flex;
justify-content: space-between;
`
export const UlStyled = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
color: ${(props) => props.theme.colors.text};
list-style: none;
`
