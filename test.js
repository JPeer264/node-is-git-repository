import { homedir } from 'os';
import test from 'ava';

import isGit from './';

test('check if process.cwd() is a git repo', (t) => {
  t.true(isGit());
});

test('check if another dir is a git repo', (t) => {
  t.false(isGit(homedir()));
});
