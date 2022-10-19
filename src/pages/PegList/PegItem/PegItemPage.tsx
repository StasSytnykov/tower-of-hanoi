import { IPegItemPage } from "../../../interfaces/pagesInterfaces";
import {
  ListThumb,
  PegsListPageStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegItemPage.styled";

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
