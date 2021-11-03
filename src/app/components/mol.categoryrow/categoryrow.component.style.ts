import styled from "styled-components";
import { spacing } from "../../../atomic";

export const CategoryContainer = styled.div`
margin-bottom: 30px;
h2 {
    margin: 0 0 0 ${spacing.padding};
}
`

export const Card = styled.div`
display: flex;
overflow-x: hidden;
`

export const StyledList = styled.div`
display: flex;
padding-left: ${spacing.padding};

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
