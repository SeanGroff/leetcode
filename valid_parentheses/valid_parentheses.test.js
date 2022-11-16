import { describe, expect } from "vitest";

import { isValid } from "./valid_parentheses";

describe("Is Valid Parentheses", () => {
  it("should return true", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
  });

  it("should return false", () => {
    expect(isValid("[")).toBe(false);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
  });
});
