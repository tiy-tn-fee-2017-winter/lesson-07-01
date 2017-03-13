// Load Config
// import config from './knexfile';
const config = require('./knexfile');

// Load knex library
const KnexLib = require('knex');
const database = KnexLib(config.development);

console.log('ITS WORKING');

// Select data from users table
database.select().from('users')
  .then((users) => {
    console.log(users);

    // Close the app
    process.exit();
  });
