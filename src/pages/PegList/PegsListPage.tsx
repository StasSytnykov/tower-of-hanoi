import { DisksButton } from "../../components/DisksButton/DisksButton";
import { Thumb, PegsListThumb } from "./PegsListPage.styled";
import { IDisksPegsListPagesProps } from "../../interfaces/disksInterface";

export const PegsListPage = ({
  children,
  pegDisks,
  setPegDisks,
}: IDisksPegsListPagesProps) => (
  <Thumb>
    <PegsListThumb>{children}</PegsListThumb>
    <DisksButton pegDisks={pegDisks} setPegDisks={setPegDisks} />
  </Thumb>
);
