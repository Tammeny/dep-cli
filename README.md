# dep-cli
[![Build Status](https://www.travis-ci.org/Tammeny/dep-cli.svg?branch=master)](https://www.travis-ci.org/Tammeny/dep-cli)
> Get the information of dependencies in a npm package.json.

To create this repository I have forked this project and make some edit:

https://www.npmjs.org/package/package-info

The information that you can retrieve are:
- <b>package name</b>
- <b>package version</b>
- <b>package description</b>
- <b>package license</b>
- <b>package homepage</b>
- <b>package author name</b>

## Used for node program
It will get only one package info.
```sh
$ npm install --save dep-cli
```

```js
const info = require('dep-cli');

(async () => {
    console.log(await info('dep-cli'));
})();
```

## Used for command line
It will get the dependency information in package.json under the current directory, or you can enter the absolute path of package.json.

```sh
$ npm install --global dep-cli
```

```sh
$ dep-cli --help

Usage
  $ dep-cli [package-path]

Example
  $ cd /Users/tangwenyong/Documents/yourProject
  $ dep-cli

  or
  $ dep-cli /Users/tangwenyong/Documents/yourProject/package.json
```

It will prints:
```
===== mocha =====
name : mocha
version : 5.2.0
description : simple, flexible, fun test framework
license : MIT
homepage : https://mochajs.org
author : TJ Holowaychuk
total dependencies: 1
```

## License

The MIT License (MIT)

Copyright (c) 2014 [唐文雍](https://www.tangwenyong.com)
