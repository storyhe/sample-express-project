const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./src/db/models').sequelize
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet'); 
if (process.env.NODE_ENV === 'development') {
  sequelize.sync()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: [],
  credentials: true,
}));

app.use(helmet());

app.use('/static', express.static(__dirname + '/src/static'))

app.use(require('./src/routes'))
app.get('/', (req, res) => {
  res.send('hello :)')
})

// 404 Not Found
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
