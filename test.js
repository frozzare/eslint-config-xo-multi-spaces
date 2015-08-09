'use strict';

var clearRequire = require('clear-require');
var eslint       = require('eslint');
var fixture      = '\'use strict\';\nvar yx = false;\nvar x  = true;\n\nif (x) {\n  console.log(yx);\n}\n';
var isPlainObj   = require('is-plain-obj');
var tempWrite    = require('temp-write');
var test         = require('ava');

function runEslint(str, conf) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

test('main', function (t) {
	clearRequire.all();
	var conf = require('./');

	t.assert(isPlainObj(conf));
	t.assert(isPlainObj(conf.env));
	t.assert(isPlainObj(conf.rules));
	t.assert(runEslint(fixture, conf).length === 0);

	t.end();
});

test('browser', function (t) {
	clearRequire.all();
	var conf = require('./browser');

	t.assert(isPlainObj(conf));
	t.assert(isPlainObj(conf.env));
	t.assert(isPlainObj(conf.rules));
	t.assert(runEslint(fixture, conf).length === 0);

	t.end();
});

test('esnext', function (t) {
	clearRequire.all();
	var conf = require('./esnext');

	t.assert(isPlainObj(conf));
	t.assert(isPlainObj(conf.env));
	t.assert(isPlainObj(conf.rules));
	t.assert(runEslint('const x = true;\n\nif (x) {\n  console.log();\n}\n', conf).length === 0);

	t.end();
});
