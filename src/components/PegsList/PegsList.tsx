import { NumberOfDisks } from "../NumberOfDisks/NumberOfDisks";
import { usePegsState } from "../../hooks/usePegsState";
import { SourceDisksList } from "./DisksLists/SourceDisksList";
import { AuxiliaryDisksList } from "./DisksLists/AuxiliaryDisksList";
import { DestinationDisksList } from "./DisksLists/DestinationDisksList";
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
            <SourceDisksList
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
            <AuxiliaryDisksList
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
            <DestinationDisksList
              pegDisks={destinationDisks}
              setPegDisks={setDestinationDisks}
              tookDisk={tookDisk}
              setTookDisk={setTookDisk}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
      </PegsListStyled>
      <NumberOfDisks
        tookDisk={tookDisk}
        auxiliaryDisks={auxiliaryDisks}
        destinationDisks={destinationDisks}
        sourceDisks={sourceDisks}
        setSourceDisks={setSourceDisks}
      />
    </PegsListThumb>
  );
};
