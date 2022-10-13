import { describe, expect, it } from "@jest/globals";
import { onErrorNotify } from "./onErrorNotify";
import { onWinNotify } from "./onWinNotify";

describe("notify", () => {
  it("notify error show", function () {
    const mockFn = jest.fn(onErrorNotify);

    mockFn({ id: 1 }, [{ width: 280, id: 2, color: "#152354" }]);

    expect(mockFn).toHaveBeenCalled();
  });

  it("notify win show", function () {
    const mockFn = jest.fn(onWinNotify);

    mockFn([], [], { width: 280, id: 0, color: "#152354" });

    expect(mockFn).toHaveBeenCalled();
  });
});
