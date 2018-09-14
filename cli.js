#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var info = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ dependencies-info <package-name>');
	console.log('');
	console.log('Example');
	console.log('  $ dependencies-info pageres');
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

var target = (input && require(input)) || require(process.cwd() + '/package.json');
var depObj = Object.assign(target.dependencies,target.devDependencies);
var depArr = Object.keys(depObj);
(async ()=>{
	for(const dep of depArr) {
		try{
			const version = await info(dep);
			console.log(version);
		}catch(err){
			console.error(err);
			process.exit(1);
		};
	}
})();

