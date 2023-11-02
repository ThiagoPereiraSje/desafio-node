// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'mysql',
      port: 3306,
      database: 'fc-node-app',
      user:     'root',
      password: 'fc-node-app'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./migrations/v1",
    }
  },
};
