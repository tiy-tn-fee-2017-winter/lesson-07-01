// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
