import { disksLogic } from "../../../utils/disksLogic";
import { IDisksPegsListProps } from "../../../interfaces/disksInterface";
import {
  ListThumb,
  PegsListPageStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegItemPage.styled";
import { DiskList } from "./DiskList/DiskList";

export const PegItemPage = ({
  pegDisks,
  setPegDisks,
  tookDisk,
}: IDisksPegsListProps) => {
  const onClickPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk);
  };
  return (
    <PegsListPageStyled>
      <PegsItemStyled>
        <CenterStick>
          <ListThumb onClick={onClickPeg}>
            <DiskList pegDisks={pegDisks}></DiskList>
          </ListThumb>
        </CenterStick>
        <BottomStick />
      </PegsItemStyled>
    </PegsListPageStyled>
  );
};
