import { DisksButton } from "../DisksButton/DisksButton";
import { usePegsState } from "../../hooks/usePegsState";
import { PegItem } from "./PegItem/PegItem";
import {
  PegsListThumb,
  PegsListStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegsList.styled";

export const PegsList = () => {
  const { pegDisks, setPegDisks } = usePegsState();

  return (
    <PegsListThumb>
      <PegsListStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              tookDisk={pegDisks.tookDisk}
              pegDisks={pegDisks.sourcePegDisks}
              setPegDisks={setPegDisks}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              tookDisk={pegDisks.tookDisk}
              pegDisks={pegDisks.auxiliaryPegDisks}
              setPegDisks={setPegDisks}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              tookDisk={pegDisks.tookDisk}
              pegDisks={pegDisks.destinationPegDisks}
              setPegDisks={setPegDisks}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
      </PegsListStyled>
      <DisksButton pegDisks={pegDisks} setPegDisks={setPegDisks} />
    </PegsListThumb>
  );
};
