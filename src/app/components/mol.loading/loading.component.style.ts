import styled from 'styled-components'

export const DivStyled = styled.div`
position: fixed;
inset: 0;
background-color: ${props => props.theme.colors.background_primary};
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
`

export const CircularProgress = styled.div`
  display: inline-block;
  padding: 40px;
  border-radius: 50%;
  animation: rotate 0.7s linear infinite;
  background: linear-gradient(90deg, black 0%, red 53%);
  z-index: 5;
  transform: translate(-50%, -50%);

  :after {
    content: "";
    background: ${props => props.theme.colors.background_primary};
    position: absolute;
    inset: 0;
    border-radius: 50%;
    margin: 5px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
