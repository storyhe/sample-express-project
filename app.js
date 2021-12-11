const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const context = require('./src/context.js')
const config = require('./config.js')
const RedisStore = require('connect-redis')(session)
const routers = require('./src/routes/index')
const responseFormatter = require('./src/library/responseFormatter.js')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: [],
  credentials: true,
}));


app.use(session({
  secret: config.SECRET_KEY,
  saveUninitialized: true,
  resave: false,
  store: new RedisStore({
    client: config.redis.session
  })
}))

app.use(helmet());
app.use('/static', express.static('./src/static'))
app.use(responseFormatter);

app.use(routers)

app.get('/', (req, res) => {
  res.send('hello :)')
})

// 404 Not Found
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err.stack);
  res.status(500).send({status:500, message: 'internal error', type:'internal'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
