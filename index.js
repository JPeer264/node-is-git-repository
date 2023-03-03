import { execaCommandSync } from "execa";
import { isAbsolute, join } from "node:path";
import process from "node:process";

const processCwd = process.cwd();

const isGit = (altPath = processCwd) => {
  const cwd = isAbsolute(altPath) ? altPath : join(processCwd, altPath);

  try {
    execaCommandSync("git rev-parse --is-inside-work-tree", { cwd });

    return true;
  } catch {
    return false;
  }
};

export default isGit;
