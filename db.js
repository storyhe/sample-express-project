const config = require('./config');
const knex = require('knex')

module.exports = knex({
  client: 'mysql',
  connection: Object.assign({}, config.DATABASE),
  pool: { min: 5, max: 5 }
})