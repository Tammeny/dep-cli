# dep-cli  v1.0.0
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

## Install

```sh
$ npm install --save dep-cli
```


## Usage

```js
const info = require('dep-cli');

(async () => {
    console.log(await info('dep-cli'));
})();
```

## CLI

```sh
$ npm install --global dep-cli
```

```sh
$ dep-cli --help

Usage
  $ dep-cli <package-name>

Example
  $ dep-cli request
```

It will prints:
```
name: dep-cli
version: 1.0.0
description: Get the information of dependencies in a npm package.json
license: MIT
homepage: https://github.com/Tammeny/dep-cli
author: tangwenyong
```

## License

The MIT License (MIT)

Copyright (c) 2014 [唐文雍](https://www.tangwenyong.com)
