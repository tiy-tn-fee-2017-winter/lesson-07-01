// Load Config
// import config from './knexfile';
const config = require('./knexfile');
const inquirer = require('inquirer');

// Load knex library
const KnexLib = require('knex');
const database = KnexLib(config.development);

console.log('ITS WORKING');

async function app() {
  const answers = await inquirer.prompt([{
    type: 'input',
    name: 'username',
    message: 'Who are you?',
  }]);

  // SELECT * FROM users WHERE username = ? LIMIT 1
  const user = await database.select()
    .from('users')
    .where({ username: answers.username })
    .limit(1)
    // KNEX look for first in result
    .first();

  if (user === undefined) {
    const newUser = await database
      .insert({ id: 8, username: answers.username })
      .into('users');

    console.log('NEWUSER', newUser);
  } else {
    console.log('USER', user);
  }

  // Select from "users" table
  const users = await database.select().from('users');

  console.log(users);
  process.exit();
}

app();
