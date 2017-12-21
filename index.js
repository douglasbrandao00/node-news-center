'use strict'
const app = require('./config/server');

app.listen('3000', () => {
  return console.log('app is listen on port 3000');
});
