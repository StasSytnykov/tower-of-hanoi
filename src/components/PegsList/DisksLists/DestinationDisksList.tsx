import React, { useEffect } from "react";
import { disksLogic } from "../../../utils/disksLogic";
import { IDisksDestinationProps } from "../../../interfaces/disksInterface";
import { ListThumb, DisksList } from "./DisksList.styled";
import { DiskItem } from "./DiskItem/DiskItem";

export const DestinationDisksList = ({
  onWinNotify,
  startPegId,
  pegDisks,
  setPegDisks,
  tookDisk,
  setTookDisk,
}: IDisksDestinationProps) => {
  useEffect(() => onWinNotify(), [onWinNotify]);
  const onClickDestinationPeg = () => {
    disksLogic(pegDisks, setPegDisks, tookDisk, setTookDisk, startPegId);
  };

  return (
    <ListThumb onClick={onClickDestinationPeg}>
      <DisksList>
        <DiskItem pegDisks={pegDisks} />
      </DisksList>
    </ListThumb>
  );
};
