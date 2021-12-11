
class StockModel {
  constructor(db) {
    this.db = db
  }

  async getuser(userid) {
    return this.db('stock').where('id', userid).first()
  }

}

module.exports = StockModel