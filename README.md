# eslint-config-xo-multi-space [![Build Status](https://travis-ci.org/frozzare/eslint-config-xo-multi-spaces.svg?branch=master)](https://travis-ci.org/frozzare/eslint-config-xo-multi-spaces)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [XO](https://github.com/sindresorhus/xo) with 2-space indent, key spacing and multi spaces.

This is for advanced users. You probably want to use XO directly.

## Install

```
$ npm install --save-dev eslint-config-xo-multi-spaces
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "xo-multi-spaces"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "xo-multi-spaces"
}
```

This package also exposes [`xo-multi-spaces/esnext`](esnext.js) if you want ES2015 support and rules:

```json
{
	"extends": "xo-multi-spaces/esnext"
}
```

And [`xo-multi-spaces/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "xo-multi-spaces/browser"
}
```

## License

MIT © [Fredrik Forsmo](http://forsmo.me)
