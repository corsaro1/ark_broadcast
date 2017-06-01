# ark_broadcast
broadcast ark signed tx
a very simple example on howto broadcast an already signed tx on ARK network (thanks for his precious help to fixcrypt and gr33ndrag0n)

sudo apt-get update

sudo apt-get install nodejs

sudo apt-get install npm

npm install arkecosystem/ark-js#mainnet

npm install request

wget https://raw.githubusercontent.com/corsaro1/ark_broadcast/master/arktx.js

wget https://raw.githubusercontent.com/corsaro1/ark_broadcast/master/arktx2.js

---------

mainnet (example 1, using curl):

var=$(node arktx.js)

curl -k -H "Content-Type: application/json" -H "version: 0.8.0" -H "port: 1" -H 'nethash: 6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988' -X POST -d '{"transactions":['$var']}' https://api.arknode.net/peer/transactions/

---------

mainnet (example 2, using "request"):

node arktx2.js AbEtS8VA4LA1wgJWf4wA3JKyZrfvimp4Ht 1 "passphrase" "second"
