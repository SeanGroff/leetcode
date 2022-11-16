import { describe } from "vitest";

import { twoSum } from "./two_sum.js";

describe("two_sum", () => {
  it("should return [0, 1] when nums = [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("should return [1, 2] when nums = [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("should return [0, 1] when nums = [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
