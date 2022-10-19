import {
  ListThumb,
  PegsListPageStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegItem.styled";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  onClickPeg: () => void;
}

export const PegItem = ({ children, onClickPeg }: Props) => {
  return (
    <PegsListPageStyled>
      <PegsItemStyled>
        <CenterStick>
          <ListThumb onClick={onClickPeg}>{children}</ListThumb>
        </CenterStick>
        <BottomStick />
      </PegsItemStyled>
    </PegsListPageStyled>
  );
};
