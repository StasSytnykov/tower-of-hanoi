import { DisksButtonThumb, DisksButton } from "./NumberOfDisks.styled";

export const NumberOfDisks = () => {
  return (
    <DisksButtonThumb>
      <DisksButton type={"button"}>-1 disk</DisksButton>
      <DisksButton type={"button"}>+1 disk</DisksButton>
    </DisksButtonThumb>
  );
};
