import styled from 'styled-components'
import { fontSize } from '../../../atomic'
interface Props {
    image?: string
    color?: string
}

export const Title = styled.div`
font-size: ${fontSize.xxLarge};
font-weight: bold;

@media(max-width: 768px){
    font-size: ${fontSize.xLarge};
}
`

export const MovieInfo = styled.div`
font-size: ${fontSize.medium};
font-weight: bold;
margin-top: 15px;

@media(max-width: 768px){
    font-size: ${fontSize.small};
}
`

export const DivStyled = styled.div<Props>`
display: inline-block;
margin-right: 15px;
color: ${(props) => props.color && props.color}
`

export const Description = styled.div`
max-width: 40%;
margin-top: 15px;
font-size: ${fontSize.large};
color: ${(props) => props.theme.colors.darkGray};
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5; 
-webkit-box-orient: vertical;

@media(max-width: 768px){
    font-size: ${fontSize.xSmall};
    width: 100%;
    margin-right: 30px;
    max-width: max-content;
}
`

export const AStyled = styled.a`
display: inline-flex;
justify-content: space-between;
align-items: center;
font-size: ${fontSize.large};
font-weight: bold;
padding: 12px 25px;
border-radius: 5px;
text-decoration: none;
margin-right: 10px;
opacity: 1;
transition: all ease 0.2s;
:hover {
opacity: 0.7;
cursor: pointer;
}

@media(max-width: 768px){
    font-size: ${fontSize.small};
}
@media(max-width: 450px){
    font-size: ${fontSize.xxSmall};
    padding: 10px 20px;
}
`

export const AWatchStyled = styled(AStyled)`
background-color: ${(props) => props.theme.colors.background_secundary};
color: ${(props) => props.theme.colors.black_secondary}
`

export const AListStyled = styled(AStyled)`
background-color: ${(props) => props.theme.colors.gray};
color: ${(props) => props.theme.colors.background_secundary}
`

export const DivGenderStyled = styled.div`
margin-top: 15px;
font-size: ${fontSize.medium};
color: ${(props) => props.theme.colors.darkGray};

@media(max-width: 768px){
    font-size: ${fontSize.xSmall};
}
`