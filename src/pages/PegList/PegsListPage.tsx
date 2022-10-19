import { PegsListThumb } from "./PegsListPage.styled";
import { IDisksPegsListPagesProps } from "../../interfaces/pagesInterfaces";

export const PegsListPage = ({ children }: IDisksPegsListPagesProps) => (
  <PegsListThumb>{children}</PegsListThumb>
);
