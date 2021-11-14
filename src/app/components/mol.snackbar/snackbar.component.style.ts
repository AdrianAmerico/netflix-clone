import styled from "styled-components";

interface Props {
  showSnack?: boolean;
  type?: "success" | "fail";
}

export const Snack = styled.div<Props>`
  position: fixed;
  left: 5%;
  bottom: 5%;
  max-width: 350px;
  padding: 10px 5px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.type === "success" ? "#00F593" : "#FF0033"};
  > h1 {
    flex: 20%;
    word-break: keep-all;
  }
  > div {
    flex: 80%;
    text-align: start;
    font-weight: bold;
  }

  visibility: ${(props) => (props.showSnack ? "visible" : "hidden")};
  animation: ${(props) => props.showSnack && "fadeIn 0.5s, fadeOut 0.5s 1.5s"};

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
