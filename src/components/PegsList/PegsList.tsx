import { useState } from "react";
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
  const [sourceDisks, setSourceDisks] = useState<number[]>([3, 2, 1]);
  const [auxiliaryDisks, setAuxiliaryDisks] = useState<number[]>([]);
  const [destinationDisks, setDestinationDisks] = useState<number[]>([]);
  const [tookDisk, setTookDisk] = useState<number>(0);

  const onSetTookDisk = (arg: number) => setTookDisk(arg);

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
