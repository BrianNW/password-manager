console.log('starting password manager');

var storage = require('node-persist');

storage.initSync();
// writes and syncs variables

// storage.setItemSync('name', 'Brian');
// saves new variable to machine

var accounts = storage.getItemSync('accounts');

accounts.push({
    username: 'Joy',
    balance: 100
});

storage.setItemSync('accounts', accounts);

console.log(accounts);