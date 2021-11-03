import styled from 'styled-components'
import { API, spacing } from '../../../atomic'

interface Props {
    image?: string
    color?: string
}

export const SectionStyled = styled.section<Props>`
height: 100vh;
background-size: cover;
background-position: center;
background-image: url(${API.BACKGROUND_IMAGE}/${(props) => props.image});
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
font-size: 60px;
font-weight: bold;
`

export const MovieInfo = styled.div`
font-size: 18px;
font-weight: bold;
margin-top: 15px;
`

export const DivStyled = styled.div<Props>`
display: inline-block;
margin-right: 15px;
color: ${(props) => props.color && props.color}
`

export const Description = styled.div`
max-width: 40%;
margin-top: 15px;
font-size: 20px;
color: #999;
`

export const AStyled = styled.a`
display: inline-flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
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
font-size: 18px;
color: #999;
`