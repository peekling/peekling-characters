// Keep the pack-local review command on the repository's adaptive art gate.
process.argv[2] = "peek";
await import("../../../scripts/qa-character-pack.mjs");
