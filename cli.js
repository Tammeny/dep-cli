#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var info = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('\x1b[36m%s\x1b[0m', 'Usage');
	console.log('  $ dep-info <package-name>');
	console.log('');
	console.log('\x1b[36m%s\x1b[0m', 'Example');
	console.log('  $ dep-info pageres');
}

if (argv.indexOf('-h') !== -1 || argv.indexOf('--help') !== -1) {
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
			console.log('\x1b[33m%s%s%s\x1b[0m', '===== ', version.name, ' =====');
			for(const key of Object.keys(version)) {
				console.log(key, ':', version[key]);
			}
		}catch(err){
			console.error(err);
			process.exit(1);
		};
	}
	console.log('\x1b[32m%s%s\x1b[0m', 'total dependencies: ', depArr.length);
})();

