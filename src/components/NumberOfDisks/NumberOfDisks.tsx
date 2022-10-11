import { onAddDisk } from "../../utils/onAddDisk";
import { IButton } from "../../interfaces/buttonInterfaces";
import { DisksButtonThumb, DisksButton } from "./NumberOfDisks.styled";

export const NumberOfDisks = ({ sourceDisks, setSourceDisks }: IButton) => {
  const onHandlePlusBtnClick = () => {
    onAddDisk(sourceDisks, setSourceDisks);
  };
  return (
    <DisksButtonThumb>
      <DisksButton onClick={onHandlePlusBtnClick} type={"button"}>
        -1 disk
      </DisksButton>
      <DisksButton type={"button"}>+1 disk</DisksButton>
    </DisksButtonThumb>
  );
};
