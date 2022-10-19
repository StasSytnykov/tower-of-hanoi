import styled from "styled-components";
import { IDiskItemStyledProps } from "../../utils/types";

export const DiskItemStyled = styled.li<IDiskItemStyledProps>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width + "px"};
  height: 20px;
  border-radius: 20px;
  &:first-child {
    display: ${(props) => (props.isHidden ? "none" : "block")};
  }
`;
