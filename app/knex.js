const knexConfig = require("./knexfile");
const knexFunc = require("knex")

const knex = knexFunc(knexConfig['development'])

module.exports = knex