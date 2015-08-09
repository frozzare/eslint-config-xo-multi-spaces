# eslint-config-xo-space [![Build Status](https://travis-ci.org/frozzare/eslint-config-xo-multispace.svg?branch=master)](https://travis-ci.org/frozzare/eslint-config-xo-multispace)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [XO](https://github.com/sindresorhus/xo) with 2-space indent, key spacing and multi space.

This is for advanced users. You probably want to use XO directly.

## Install

```
$ npm install --save-dev eslint-config-xo-space
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "xo-multispace"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "xo-multispace"
}
```

This package also exposes [`xo-multispace/esnext`](esnext.js) if you want ES2015 support and rules:

```json
{
	"extends": "xo-multispace/esnext"
}
```

And [`xo-multispace/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "xo-multispace/browser"
}
```

## License

MIT © [Fredrik Forsmo](http://forsmo.me)
