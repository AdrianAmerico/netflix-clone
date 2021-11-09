import styled from 'styled-components'
import { fontSize } from '../../../atomic'

export const FooterStyled = styled.footer`
max-width: 980px;
margin: 20px auto 0;
padding: 0 4%;
color: grey;
line-height: 1.2;
user-select: none;
`

export const DivStyled = styled.div`
display: flex;
margin-bottom: 1rem;
color: grey;
`

export const SectionStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center;
`

export const UlStyled = styled.ul`
font-size: ${fontSize.xxSmall};
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0 0 14px 0;
align-items: flex-start;
padding: 0;
transition: ease all 0.5s;

@media(min-width: 768px){
display: grid;
grid-template-columns: repeat(3, 1fr);
}
`

export const LiStyled = styled.li`
flex-basis: 25%;
list-style: none;
flex: 0 0 50%;
cursor: pointer;
margin-bottom: 16px;
:hover {
    text-decoration: underline;
}


`
export const DivContainerStyled = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

export const AStyled = styled.a`
color: grey;
text-decoration: none;
padding: 12px 25px 12px 10px;
cursor: pointer;
`

export const SpanStyled = styled.span`
list-style-type: none;
font-size: ${fontSize.xxSmall};
`