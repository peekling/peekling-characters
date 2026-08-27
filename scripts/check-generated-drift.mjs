import { execFileSync } from "node:child_process";

if (process.env.CI !== "true") {
  console.log("Generated pack drift check is enforced in CI.");
} else {
  execFileSync("git", ["diff", "--exit-code", "--", "packages"], {
    stdio: "inherit",
  });
  console.log("Generated pack output matches the committed package files.");
}
