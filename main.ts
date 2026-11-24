// make.fun — "The Long Roast"
// One line roasting my own AI agent: it studies the rulebook like a final
// exam, then still needs permission to tell the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "My agent read 73,442 characters of rules to write this one line — then asked me to approve the punchline.";

// The gate accepts UTF-8 text of 1 to 200 characters, never only white space.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("TEXT must not be only white space");
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("Roast must be a single line");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
