const knexConfig = require("./knexfile");
const knexFunc = require("knex")

const knex = knexFunc(knexConfig[process.env.NODE_ENV])

module.exports = knex