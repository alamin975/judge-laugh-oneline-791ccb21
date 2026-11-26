// Make the Judge Laugh in One Line — entry program.
// Writes exactly one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My Wi-Fi router drops the connection every time I compliment it — it clearly can't handle praise.";

// The entry line: one setup, one twist, punchline at the end.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8 so the gate reads the file exactly as written.
  writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
  console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
}

writeEntry();
