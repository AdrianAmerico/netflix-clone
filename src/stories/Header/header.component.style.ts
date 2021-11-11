import styled from 'styled-components'

interface Props {
    isBlack: boolean
    spacing?: number | string
    size: string
}

const setSize = (size: string | void) => {
    switch (size) {
        case 'small':
            return '45'
        case 'medium':
            return '70'
        case 'large':
            return '100'
        default:
            return '70'
    }
}

export const HeaderStyled = styled.header<Props>`
display: flex;
padding: ${props => props.spacing ? props.spacing : 8}px;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 999;
inset: 0 0 auto 0;
height: ${props => setSize(props.size)}px;
transition: ease all 0.5s;
background: ${(props) => props.isBlack ? "#111" : 'transparent'};
`
