// Run the adapter code that implements XMLHttpRequest.
require('cometd-nodejs-client').adapt();

// Your normal CometD client application here.
var lib = require('cometd');
var cometd = new lib.CometD();

cometd.configure({
    // url: 'http://michaelmurphy-eval-test.apigee.net/subtostream3/cometd:80'
    url: 'http://localhost/cometd:9000'
});
// cometd.addListener('/event/Test__e', function(message) {
//     console.dir(message);
// });



cometd.handshake(function(handshakeReply) {

    if (handshakeReply.successful) {
        // Your logic here.
        console.log('handshake');
        console.dir(handshakeReply);

        
        cometd.subscribe('/event/Test__e', function(message) {
            console.dir(message);
        }, function(subscribeReply) {
            console.log('subscribed');
            console.dir(subscribeReply);
        });


    } else {
        console.dir(handshakeReply);
    }
});

