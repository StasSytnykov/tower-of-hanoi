import styled from "styled-components";
import { IDiskItemStyledProps } from "../../../../interfaces/disksInterface";

export const DiskItemStyled = styled.li<IDiskItemStyledProps>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width + "px"};
  height: 20px;
  border-radius: 20px;

  &:first-child {
    display: none;
  }
`;
