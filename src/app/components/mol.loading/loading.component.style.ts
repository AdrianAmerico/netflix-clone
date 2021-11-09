import styled from 'styled-components'

export const ImgStyled = styled.img`
position: fixed;
inset: 0;
width: 100%;
height: 100%;
z-index: 99;
background-color: ${(props) => props.theme.colors.background_secundary};
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`
