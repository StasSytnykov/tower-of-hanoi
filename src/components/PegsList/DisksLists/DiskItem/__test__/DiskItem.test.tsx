import { render, screen } from "@testing-library/react";
import { DiskItem } from "../DiskItem";

describe("DiskItem", () => {
  it("should disk render", () => {
    render(<DiskItem pegDisks={[{ width: 1, id: 1, color: "1" }]} />);

    const listElements = screen.getAllByRole("listitem");
    expect(listElements.length).toBe(1);
  });
});
