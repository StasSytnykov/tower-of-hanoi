import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 230px;
  height: 70px;

  background-color: deepskyblue;

  font-size: 24px;
  color: white;
  opacity: ${(props) => (props.disabled ? "50%" : "100%")};

  border-radius: 5px;
  border: 1px solid transparent;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  }
`;
