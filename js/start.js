$( document ).ready(function() {
  console.log("Application started");
  pingDevices();
  connectToDevice();
});

function pingDevices(){
	ping.promise.probe(nconf.get('SSH_GATEWAY')).then(function (res) {
		$('#gateway-status').text(res.alive ? 'Alive' : 'unreachable');
	});
}
function connectToDevice(){
	var sshconn = new SSH({
	    host: nconf.get('SSH_SERVER'),
	    user: nconf.get('SSH_USER'),
	    pass: nconf.get('SSH_PASS'),
	});

	sshconn.exec('uptime', {
		out: function(stdout){
			$('#test-output').text(stdout);
		},
	}).start({
		success : function()
		{
			//$('#test-output').text("SUCCESS");
		},
		fail: function(err){
			$('#test-output').text("FAIL");
		}
	});
}