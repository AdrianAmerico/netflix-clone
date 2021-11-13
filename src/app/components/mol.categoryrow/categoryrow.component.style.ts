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
overflow-x: auto;
h2 {
    margin: 0 0 0 ${spacing.padding};
}
:hover {
    >div {
        opacity: 1;
    }
}
::-webkit-scrollbar { 
    display: none; 
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
position: relative;
`

export const StyledListItem = styled.div`
display: flex;
width: 150px;
position: relative;

img {
    width: 100%;
    transform: scale(0.9);
    transition: ease all 0.2s;
    :hover{
        transform: scale(1);
        cursor: pointer;
    }
}

div {
    width: 100%;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    inset: auto 0 0 0;
    :hover {
        svg {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: rgba(0,0,0,0.50);
            cursor: pointer;
        }
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

@media(max-width: 768px){
    opacity: 1;
    width: 30px;
}

svg {
    height: 30%;
}
`