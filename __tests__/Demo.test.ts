import { test, expect } from "vitest";

function Sum(a: number, b: number): number {
  return a + b;
}

test("Simple demo test, it should pass all the time", () => {
  expect(Sum(1, 2)).toBe(3);
});

test.skip("Skipped task", () => {
  expect(Sum(1, 2)).toBe(3);
});
