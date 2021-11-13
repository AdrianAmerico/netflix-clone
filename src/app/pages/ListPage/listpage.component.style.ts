import styled from "styled-components";

export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 0;
`;

export const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10% 4%;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  flex-wrap: wrap;
`;

export const ErrorMessage = styled.div`
  color: #999;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  inset: auto 0 auto 0;
  text-align: center;
`;
