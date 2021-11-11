import styled from 'styled-components'
import { API, colors, spacing } from '../../atomic'

interface Props {
    image: string
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
background-image: linear-gradient(to top, ${colors.background_primary} 10%, transparent 90%)
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
background-image: linear-gradient(to right, ${colors.background_primary} 30%, transparent 70%)
`
