import { test } from "@cross/test";
import { assertEquals } from "@std/assert";

import { f, fAdd } from "./mod.ts";

test("dummy", () => {
  assertEquals(fAdd(1, 2), 3);
});

test("dummy", () => {
  assertEquals(f.add(1, 2), 3);
});
