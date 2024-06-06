import { test, expect } from "vitest";
import ENV from "./env";

test("Environment variables test", () => {
  expect(ENV.IS_PROD).toBeDefined();
  expect(ENV.IS_DEV).toBeDefined();
  expect(ENV.BASE_URL).toBeDefined();
  expect(ENV.SQL_DB_URI).toBeDefined();
  expect(ENV.SQL_DB_TOKEN).toBeDefined();
});
