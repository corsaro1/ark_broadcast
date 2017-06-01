var ark = require ('arkjs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



var address = process.argv[2]
var amountx = process.argv[3]
var secret = process.argv[4]
var secondsecret = process.argv[5]


    var amount      = amountx * Math.pow(10, 8);
    var transaction = ark.transaction.createTransaction(address, amount, null, secret, secondsecret );

    console.log(transaction);
    sleep(10000);
    


var request = require('request');

var callback = function(error, response, body) {
  console.log(error || body);
};

request({
  url: 'https://api.arknode.net/peer/transactions/',
  json: { transactions: [transaction] },
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'os': 'linux3.2.0-4-amd64',
    'version': '0.3.0',
    'port': 1,
    'nethash': "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988"
  }
}, callback);
