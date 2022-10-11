import styled from "styled-components";

const DisksButtonThumb = styled.div`
  display: flex;
`;

const DisksButton = styled.button`
  width: 180px;
  height: 50px;

  background-color: deepskyblue;

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
