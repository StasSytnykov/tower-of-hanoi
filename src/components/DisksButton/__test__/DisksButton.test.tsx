import { render, screen, fireEvent } from "@testing-library/react";
import { DisksButton } from "../DisksButton";
import { onAddDisk } from "../../../utils/onAddDisk";
import { onGetRandomColor } from "../../../utils/onGetRandomColor";

const mockFn = jest.fn();
const onClickMockFn = jest.fn(onAddDisk);

describe("DiskItem", () => {
  it("should onAddDisk func work", () => {
    render(
      <DisksButton
        pegDisks={{
          sourcePegDisks: [
            {
              peg: "source",
              width: 0,
              id: 0,
              color: "",
            },
            { peg: "", width: 280, id: 1, color: onGetRandomColor() },
            { peg: "", width: 260, id: 2, color: onGetRandomColor() },
            { peg: "", width: 240, id: 3, color: onGetRandomColor() },
          ],
          auxiliaryPegDisks: [
            {
              peg: "auxiliary",
              width: 0,
              id: 0,
              color: "",
            },
          ],
          destinationPegDisks: [
            {
              peg: "destination",
              width: 0,
              id: 0,
              color: "",
            },
          ],
          tookDisk: {
            peg: "",
            width: 0,
            id: 0,
            color: "",
          },
        }}
        setPegDisks={mockFn}
      />
    );

    onClickMockFn([], mockFn);

    const buttonElement = screen.getByRole("button", { name: "+1 disk" });
    fireEvent.click(buttonElement);
    expect(onClickMockFn).toBeCalled();
  });
});
