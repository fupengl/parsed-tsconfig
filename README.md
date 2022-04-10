# parsed-tsconfig

Get the configuration of tsconfig in node.

## Install

Using npm:

```console
npm install parsed-tsconfig
```

Using yarn:

```console
yarn add parsed-tsconfig
```


## Usage

```js
const { getParsedTSConfig } = require('parsed-tsconfig');

const { options } = getParsedTSConfig();
console.log(options); // CompilerOptions
```
