const { createClient } = require('redis')

module.exports = {
  redis: {
    session: createClient({ 
      host : 'localhost',
      port : 6379
    }),
    cache: createClient({ 
      host : 'localhost',
      port : 6380
    })
  },

  DATABASE: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'test1234',
    database : 'test'
  },

  SECRET_KEY: 'abc1234',
};