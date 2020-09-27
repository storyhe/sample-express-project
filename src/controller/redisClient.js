const redis = require('redis')
const config = require('../../config')

module.exports = {
  'session': redis.createClient({ 
    host : config.SESSION_REDIS_HOST, 
    port : config.SESSION_REDIS_POST,
        
  }),
  'cache': redis.createClient({ 
    host : config.CACHE_REDIS_HOST, 
    port : config.CACHE_REDIS_PORT
  })
}