import { PegsListThumb } from "./PegsList.styled";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PegsList = ({ children }: Props) => (
  <>
    <h1>Tower of Hanoi</h1>
    <PegsListThumb>{children}</PegsListThumb>
  </>
);
