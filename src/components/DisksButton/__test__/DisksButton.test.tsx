import { render, screen, fireEvent } from "@testing-library/react";
import { DisksButton } from "../DisksButton";
import { onAddDisk } from "../../../utils/onAddDisk";

const mockFn = jest.fn();
const onClickMockFn = jest.fn(onAddDisk);

describe("DiskItem", () => {
  it("should onAddDisk func work", () => {
    render(
      <DisksButton
        onHandlePlusBtnClick={mockFn}
        onHandleMinusBtnClick={mockFn}
        isDisabledButton={true}
      />
    );

    onClickMockFn([], mockFn);

    const buttonElement = screen.getByRole("button", { name: "+1 disk" });
    fireEvent.click(buttonElement);
    expect(onClickMockFn).toBeCalled();
  });
});
