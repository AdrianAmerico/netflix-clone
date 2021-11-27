import styled from 'styled-components'

interface Props {
    backgroundColor?: string;
    color?: string;
    size?: string;
    primary?: boolean;
}

interface Theme {
    fontSize: string;
    spacing: string;
}

const sizeValues = (size: string | void): Theme => {
  switch (size) {
    case 'small':
      return {
        fontSize: '12px',
        spacing: '10px 16px'
      }
    case 'medium':
      return {
        fontSize: '14px',
        spacing: '11px 20px'
      }
    case 'large':
      return {
        fontSize: '16px',
        spacing: '12px 24px'
      }
    default:
      return {
        fontSize: '14px',
        spacing: '11px 20px'
      }
  }
}

export const ButtonStyled = styled.button<Props>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${props => props.backgroundColor && props.backgroundColor} !important;
    color: ${props => props.primary ? 'white' : '#333'};
    background-color:${props => props.primary ? ' #1ea7fd' : 'transparent'};
    box-shadow: ${props => props.primary && 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
    font-size: ${(props) => sizeValues(props.size).fontSize};
    padding: ${(props) => sizeValues(props.size).spacing};
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
`
