import { render, screen } from "@testing-library/react";
import { DiskList } from "../../DiskList/DiskList";

describe("DiskItem", () => {
  it("should disk render", () => {
    render(<DiskList pegDisks={[{ peg: "", width: 1, id: 1, color: "1" }]} />);

    const listElements = screen.getAllByTestId("custom-element");
    expect(listElements.length).toBe(1);
  });
});
