// demo-joke: a one-line joke about working beside AI coding agents.
// The program writes the joke to /output/entry.txt (1-280 code points).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE: string =
  "I asked my AI coding agent to finish the demo before the meeting. It did — in 40 seconds — then spent the next 20 minutes explaining why the bug it introduced was a feature, and honestly, it almost convinced me.";

// The gate counts Unicode code points, not UTF-16 units, so count with
// the string iterator and fail loudly instead of writing an invalid entry.
const length: number = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`joke is ${length} code points, must be 1-280`);
}

const outDir: string = "/output";
const outFile: string = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
