import { useState } from "react";
import { IPegs } from "../../interfaces/disksInterface";
import { SourceDisksList } from "./DisksLists/SourceDisksList";
import { AuxiliaryDisksList } from "./DisksLists/AuxiliaryDisksList";
import { DestinationDisksList } from "./DisksLists/DestinationDisksList";
import {
  PegsListStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
} from "./PegsList.styled";

export const PegsList = () => {
  const [sourceDisks, setSourceDisks] = useState<IPegs[]>([
    { width: 280, id: 3 },
    { width: 260, id: 2 },
    { width: 240, id: 1 },
  ]);
  const [auxiliaryDisks, setAuxiliaryDisks] = useState<IPegs[]>([]);
  const [destinationDisks, setDestinationDisks] = useState<IPegs[]>([]);
  const [tookDisk, setTookDisk] = useState<IPegs>({ width: 0, id: 0 });

  const onSetTookDisk = (arg: IPegs) => setTookDisk(arg);

  return (
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
  );
};
