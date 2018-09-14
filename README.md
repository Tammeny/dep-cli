# dep-info  v1.0.0

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
$ npm install --save dep-info
```


## Usage

```js
const info = require('dep-info');

(async () => {
    console.log(await info('dep-info'));
})();
```

## CLI

```sh
$ npm install --global dep-info
```

```sh
$ dep-info --help

Usage
  $ dep-info <package-name>

Example
  $ dep-info request
```

It will prints:
```
name: dep-info
version: 1.0.0
description: Get the information of dependencies in a npm package.json
license: MIT
homepage: https://github.com/Tammeny/dep-info
author: tangwenyong
```

## License

The MIT License (MIT)

Copyright (c) 2014 [唐文雍](https://www.tangwenyong.com)
