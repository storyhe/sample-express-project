import UserController from './controller/user'
import UserModel from './model/user'
import StockModel from './model/stock'
import db from '../db'

export default {
  controller: {
    'User': new UserController()
  },
  model: {
    'User': new UserModel(db),
    'Stock': new StockModel(db),
  },
}