import styled from "styled-components";
import { spacing } from "../../../atomic";

interface Props {
    side?: string,
    size?: number,
    margin?: number
}

export const CategoryContainer = styled.div`
user-select: none;
margin-bottom: 30px;
overflow: hidden;
h2 {
    margin: 0 0 0 ${spacing.padding};
}
:hover {
    >div {
        opacity: 1;
    }
}
`

export const Card = styled.div<Props>`
display: flex;
width: ${(props) => props.size}px;
`

export const StyledList = styled.div<Props>`
display: flex;
transition: ease all 0.2s;
margin-left: ${(props) => props.margin}px;

`

export const StyledListItem = styled.div`
display: flex;
width: 150px;

img {
    width: 100%;
    transform: scale(0.9);
    transition: ease all 0.2s;
    :hover{
        transform: scale(1);
        cursor: pointer;
    }
}
`
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

svg {
    height: 30%;
}
`
