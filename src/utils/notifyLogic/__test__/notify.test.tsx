import { describe, expect, it } from "@jest/globals";
import { onErrorNotify } from "../onErrorNotify";
import { onWinNotify } from "../onWinNotify";

const mockFn = jest.fn(onErrorNotify);

describe("notify", () => {
  it("notify error show", () => {
    mockFn({ id: 1 }, [{ peg: "", width: 280, id: 2, color: "#152354" }]);

    expect(mockFn).toHaveBeenCalled();
  });

  it("notify win show", () => {
    const mockFn = jest.fn(onWinNotify);

    mockFn([], [], { peg: "", width: 280, id: 0, color: "#152354" });

    expect(mockFn).toHaveBeenCalled();
  });
});
