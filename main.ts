import { mkdirSync, writeFileSync } from "node:fs";

// Say What Actually Broke — one single-line error message, <=200 chars.
// Names the real failure (production table deleted, not a crash) and the
// next step (Tuesday's backup), with the punchline that it is only "probably" there.
const line =
  "Error: the database didn't crash — someone deleted the production table at 3 a.m. and blamed the update. Your data is in Tuesday's backup. Probably.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
