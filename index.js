import { platform } from 'os';
import execa from 'execa';

const cwd = process.cwd();

const isGit = (altPath = cwd) => {
  try {
    if (platform() === 'win32') {
      execa.shellSync(`pushd ${altPath} & git status`);
    } else {
      execa.shellSync(`(cd ${altPath} ; ([ -d .git ] && echo .git) || git rev-parse --git-dir 2> /dev/null)`);
    }

    return true;
  } catch (e) {
    return false;
  }
};

export default isGit;
