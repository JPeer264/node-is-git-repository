import { homedir } from 'os';

import isGit from './index';

test('check if process.cwd() is a git repo', () => {
  expect(isGit()).toBe(true);
});

test('check if relative path is correct resolved', () => {
  expect(isGit('./')).toBe(true);
});

test('check if another dir is a git repo', () => {
  expect(isGit(homedir())).toBe(false);
});
