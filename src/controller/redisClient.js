const redis = require('redis')
const config = require('../../config')

const sessionClient = redis.createClient({ 
  host : config.SESSION_REDIS_HOST, 
  port : config.SESSION_REDIS_POST,
      
})

const cacheClient = redis.createClient({ 
  host : config.CACHE_REDIS_HOST, 
  port : config.CACHE_REDIS_PORT
})


const sessionGet = key => new Promise((resolve, reject) => sessionClient.get(key, (err, data) => {
  if (err) reject(err);
  else resolve(JSON.parse(data)); // set 할때 stringify 해서 저장할 경우
}));

module.exports = { sessionClient, cacheClient, sessionGet }
