// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'todoapp',
      user:     'ryan',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
