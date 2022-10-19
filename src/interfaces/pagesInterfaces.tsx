import { HTMLAttributes, ReactNode } from "react";

export interface IDisksPegsListPagesProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface IPegItemPage extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  onClickPeg: () => void;
}
