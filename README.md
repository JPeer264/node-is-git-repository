# is-git-repository

Checks synchronously if a specific directory is a git repository

## Installation

```sh
$ npm i is-git-repository --save
```
or
```sh
$ yarn add is-git-repository
```

## Usage

```js
const isGit = require('is-git-repository');

isGit(); // true or false of process.cwd()
isGit('any/git/repo'); // true or false
```

## LICENSE

MIT © [Jan Peer Stöcklmair](https://www.jpeer.at)
