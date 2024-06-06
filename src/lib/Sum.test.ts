import Sum from "./Sum";
import { test, expect } from "vitest";

test("Simple demo test, it should pass all the time", ({ skip }) => {
  expect(Sum(1, 2)).toBe(3);
});
