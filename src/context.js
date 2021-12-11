const db = require('../db')
const UserController = require('./controller/user')
const UserModel = require('./model/user')
const StockModel = require('./model/stock')


module.exports = {
  controller: {
    'User': new UserController()
  },
  model: {
    'User': new UserModel(db),
    'Stock': new StockModel(db),
  },
}