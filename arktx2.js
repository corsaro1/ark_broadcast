var request = require('request');
var ark = require ('arkjs');


var address = process.argv[2];
var amountx = process.argv[3];
var secret  = process.argv[4];


var secondsecret = process.argv[5];
var amount       = Math.round(amountx * Math.pow(10, 8));

var transaction = ark.transaction.createTransaction(address, amount, null, secret, secondsecret );
console.log(transaction);

var callback = function(error, response, body) {
  console.log(error || body);
};
var reqObj = {
	url    : 'https://api.arknode.net/peer/transactions/',
	json   : { transactions: [transaction] },
	method : 'POST',
	headers: {
		'Content-Type': 'application/json',
		'os'          : 'linux3.2.0-4-amd64',
		'version'     : '0.3.0',
		'port'        : 1,
		'nethash'     : "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988"
	}
};

console.log('first broadcast');
request(reqObj, callback);

setTimeout(function () {
  // repeat tx after 20 secs.
	console.log('second broadcast');
	request(reqObj, callback);
}, 20000);
