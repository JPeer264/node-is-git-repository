# is-git-repository

[![Build Status](https://img.shields.io/github/actions/workflow/status/JPeer264/node-is-git-repository/ci.yml?branch=main)](https://github.com/JPeer264/node-is-git-repository/actions/workflows/ci.yml?query=branch%3Amain)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/node-is-git-repository/badge.svg?branch=main)](https://coveralls.io/github/JPeer264/node-is-git-repository?branch=main)

Checks synchronously if a specific directory is a git repository

## Installation

```sh
$ npm i is-git-repository --save
```

## Usage

```js
import isGit from "is-git-repository";

isGit(); // true or false of process.cwd()
isGit("any/git/repo"); // true or false
```

## LICENSE

MIT © [Jan Peer Stöcklmair](https://www.jpeer.at)
