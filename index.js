import execa from 'execa';
import { platform } from 'os';
import path from 'path';
import pathIsAbsolute from 'path-is-absolute';

const cwd = process.cwd();

const isGit = (altPath = cwd) => {
  const thisPath = pathIsAbsolute(altPath) ? altPath : path.join(cwd, altPath);

  try {
    if (platform() === 'win32') {
      execa.shellSync(`pushd ${thisPath} & git status`);
    } else {
      execa.shellSync(`(cd ${thisPath} ; ([ -d .git ] && echo .git) || git rev-parse --git-dir 2> /dev/null)`);
    }

    return true;
  } catch (e) {
    return false;
  }
};

export default isGit;
