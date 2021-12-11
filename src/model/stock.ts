
export default class StockModel {
  private db: any

  constructor(db) {
    this.db = db
  }

  async getuser(userid) {
    return this.db('stock').where('id', userid).first()
  }

}
