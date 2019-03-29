require('cometd-nodejs-client').adapt();
var lib = require('cometd');
var cometd = new lib.CometD();
var uri = process.argv[1];
var channel = process.argv[2];

cometd.configure({
    url: uri,
    appendMessageTypeToURL: false
});



cometd.handshake(function(handshakeReply) {

    if (handshakeReply.successful) {
        console.log('handshake');
        console.dir(handshakeReply);

        
        cometd.subscribe(channel, function(message) {
            console.dir(message);
        }, function(subscribeReply) {
            console.log('subscribed');
            console.dir(subscribeReply);
        });


    } else {
        console.dir(handshakeReply);
    }
});

