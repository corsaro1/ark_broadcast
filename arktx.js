var ark = require('arkjs');
var amount      = 1 * Math.pow(10, 8); // 100000000000
var transaction = ark.transaction.createTransaction("AbEtS8VA4LA1wgJWf4wA3JKyZrfvimp4Ht", amount, null, "firstsecret", "secondsecret");
console.log("%j", transaction);
