import execa from 'execa';
import path from 'path';
import isAbsolute from 'is-absolute';

const processCwd = process.cwd();

const isGit = (altPath = processCwd): boolean => {
  const cwd = isAbsolute(altPath) ? altPath : path.join(processCwd, altPath);

  try {
    execa.commandSync('git rev-parse --is-inside-work-tree', { cwd });

    return true;
  } catch {
    return false;
  }
};

export default isGit;
