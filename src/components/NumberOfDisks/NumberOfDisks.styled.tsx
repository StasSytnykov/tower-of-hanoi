import styled from "styled-components";

const DisksButtonThumb = styled.div`
  display: flex;
`;

const DisksButton = styled.button`
  width: 230px;
  height: 70px;

  background-color: deepskyblue;

  font-size: 24px;

  border-radius: 5px;
  border: 1px solid transparent;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { DisksButtonThumb, DisksButton };
