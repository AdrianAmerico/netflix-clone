import styled from 'styled-components'

export const H1 = styled.h1`
color: ${(props) => props.theme.colors.text}
`

export const Li = styled.li`
list-style: none;
color: ${(props) => props.theme.colors.text};
margin-left: 8%;
:hover {
    cursor: pointer;
    text-decoration: underline;
}
`
