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
  const {
    sourceDisks,
    setSourceDisks,
    auxiliaryDisks,
    setAuxiliaryDisks,
    destinationDisks,
    setDestinationDisks,
    tookDisk,
    setTookDisk,
    onSetTookDisk,
  } = usePegsState();

  return (
    <PegsListThumb>
      <PegsListStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              tookDisk={tookDisk}
              setTookDisk={onSetTookDisk}
              pegDisks={sourceDisks}
              setPegDisks={setSourceDisks}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              tookDisk={tookDisk}
              setTookDisk={onSetTookDisk}
              pegDisks={auxiliaryDisks}
              setPegDisks={setAuxiliaryDisks}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
        <PegsItemStyled>
          <CenterStick>
            <PegItem
              pegDisks={destinationDisks}
              setPegDisks={setDestinationDisks}
              tookDisk={tookDisk}
              setTookDisk={setTookDisk}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
      </PegsListStyled>
      <DisksButton
        tookDisk={tookDisk}
        auxiliaryDisks={auxiliaryDisks}
        destinationDisks={destinationDisks}
        sourceDisks={sourceDisks}
        setSourceDisks={setSourceDisks}
      />
    </PegsListThumb>
  );
};
