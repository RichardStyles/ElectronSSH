window.$ = window.jQuery = require('jquery');

var ping = require('ping'),
	keytar = require('keytar'),
	SSH = require('simple-ssh'),
	fs = require('fs'),
	nconf = require('nconf');

var configpath = __dirname + '/../config.json';
console.log(configpath);
nconf.file({ file: configpath });

require('bootstrap-sass/assets/javascripts/bootstrap');