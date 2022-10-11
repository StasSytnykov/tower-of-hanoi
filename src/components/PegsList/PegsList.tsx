import { useState } from "react";
import { NumberOfDisks } from "../NumberOfDisks/NumberOfDisks";
import { IPegs } from "../../interfaces/disksInterface";
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
  const [sourceDisks, setSourceDisks] = useState<IPegs[]>([
    { width: 280, id: 3, startPegId: 1 },
    { width: 260, id: 2, startPegId: 1 },
    { width: 240, id: 1, startPegId: 1 },
  ]);
  const [auxiliaryDisks, setAuxiliaryDisks] = useState<IPegs[]>([]);
  const [destinationDisks, setDestinationDisks] = useState<IPegs[]>([]);
  const [tookDisk, setTookDisk] = useState<IPegs>({
    width: 0,
    id: 0,
    startPegId: 0,
  });
  const onSetTookDisk = (arg: IPegs) => setTookDisk(arg);

  return (
    <PegsListThumb>
      <PegsListStyled>
        <PegsItemStyled>
          <CenterStick>
            <SourceDisksList
              startPegId={1}
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
              startPegId={2}
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
              startPegId={3}
              pegDisks={destinationDisks}
              setPegDisks={setDestinationDisks}
              tookDisk={tookDisk}
              setTookDisk={setTookDisk}
            />
          </CenterStick>
          <BottomStick />
        </PegsItemStyled>
      </PegsListStyled>
      <NumberOfDisks />
    </PegsListThumb>
  );
};
