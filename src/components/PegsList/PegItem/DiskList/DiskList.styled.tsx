import styled from "styled-components";
import { IDiskItemStyledProps } from "../../../../interfaces/disksInterface";

export const DisksListStyled = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  position: absolute;
  left: 25px;
  bottom: 0;

  max-width: 250px;
  min-width: 250px;
`;

export const DiskItemStyled = styled.li<IDiskItemStyledProps>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width + "px"};
  height: 20px;
  border-radius: 20px;

  &:first-child {
    display: none;
  }
`;
