import { PegsListThumb } from "./PegsList.styled";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PegsList = ({ children }: Props) => (
  <PegsListThumb>{children}</PegsListThumb>
);
