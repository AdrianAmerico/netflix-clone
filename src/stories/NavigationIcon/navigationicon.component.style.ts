import styled from "styled-components"

interface Props {
    side: 'left' | 'right'
}

export const DivNavigateIconStyled = styled.div<Props>`
position: absolute;
width: 40px;
height: 225px;
background: rgba(0,0,0,0.50);
z-index: 99;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
cursor: pointer;
opacity: 0;
transition: all ease 0.5s;
${(props) => props.side}: 0;

@media(max-width: 768px){
  display: none;
}

svg {
    height: 30%;
}
`