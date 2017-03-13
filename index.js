// Load Config
// import config from './knexfile';
const config = require('./knexfile');

// Load knex library
const KnexLib = require('knex');
const database = KnexLib(config.development);

console.log('ITS WORKING');

async function app() {
  // Select from "users" table
  const users = await database.select().from('users');

  console.log(users);
  process.exit();
}

app();
