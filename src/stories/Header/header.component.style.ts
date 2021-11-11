import styled from 'styled-components'

interface Props {
    /**
* You can choose whether the header will remain dark or transparent with isBlack boolean
*/
    isBlack: boolean
    /**
* You can change the header pading with nuemric or string avlues
*/
    spacing?: number | string
    /**
* You can change the height of the header with this property
*/
    size?: 'small' | 'medium' | 'large'
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
