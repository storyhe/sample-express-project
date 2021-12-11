
export default class UserModel {
  private db
  constructor(db) {
    this.db = db
  }

  async getuser(userid) {
    return this.db('user').where('id', userid).first()
  }

}
