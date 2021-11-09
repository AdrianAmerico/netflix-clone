import styled from 'styled-components'
import { API, spacing, fontSize } from '../../../atomic'
interface Props {
    image?: string
    color?: string
}

export const SectionStyled = styled.section<Props>`
height: 100vh;
background-size: cover;
background-position: center;
background-image: url(${API.BACKGROUND_IMAGE}/${(props) => props.image});

@media(max-width: 768px){
    height: 90vh;
}
`
export const VerticalTransparency = styled.div`
height: inherit;
width: inherit;
background-image: linear-gradient(to top, ${(props) => props.theme.colors.background_primary} 10%, transparent 90%)
`
export const HorizontalTransparency = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: inherit;
width: inherit;
padding: ${spacing.padding};
padding-bottom: 100px;
padding-top: 70px;
background-image: linear-gradient(to right, ${(props) => props.theme.colors.background_primary} 30%, transparent 70%)
`

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
color: #999;
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
color: #999;

@media(max-width: 768px){
    font-size: ${fontSize.xSmall};
}
`