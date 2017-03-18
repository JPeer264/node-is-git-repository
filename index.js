import execa from 'execa';

const cwd = process.cwd();

const isGit = (altPath = cwd) => {
  try {
    execa.shellSync(`(cd ${altPath} ; ([ -d .git ] && echo .git) || git rev-parse --git-dir 2> /dev/null)`);

    return true;
  } catch (e) {
    return false;
  }
};

export default isGit;
