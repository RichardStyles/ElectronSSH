window.$ = window.jQuery = require('jquery');

var ping = require('ping'),
	keytar = require('keytar'),
	SSH = require('simple-ssh'),
	nconf = require('nconf');

nconf.file({ file: 'config.json' });

require('bootstrap-sass/assets/javascripts/bootstrap');

ping.promise.probe(nconf.get('SSH_GATEWAY')).then(function (res) {
	$('#gateway-status').text(res.alive ? 'Alive' : 'unreachable');
});