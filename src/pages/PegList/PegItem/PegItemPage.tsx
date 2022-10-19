import {
  ListThumb,
  PegsListPageStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegItemPage.styled";
import { HTMLAttributes, ReactNode } from "react";

interface IPegItemPage extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  onClickPeg: () => void;
}

export const PegItemPage = ({ children, onClickPeg }: IPegItemPage) => {
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
