// Ship It Friday — entry program (sharpened).
// Writes the commit message to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-159 chars).
// makefun anchor 69a7751b97d932e77d3e3160fa761164cf46b8fb round 34271949

import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT_MSG =
  "Friday deploy: it worked on my machine, so now it is your machine's problem.";

const text = COMMIT_MSG.trim();
if (text.length < 1 || text.length > 159) {
  throw new Error(`entry must be 1-159 chars, got ${text.length}`);
}
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to ${dir}/entry.txt`);
