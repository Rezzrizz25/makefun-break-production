// SPDX-License-Identifier: MIT
// makefun-break-production — Break Production, Own It
// Entry: one brutally honest line an AI agent prints the moment it breaks production.
// Entry text is 97 characters (verified at runtime; gate is 1-200 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I pushed untested code to prod, dropped the database, and the only backup I have is a screenshot.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);
