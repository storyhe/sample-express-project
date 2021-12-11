
class UserModel {
  constructor(db) {
    this.db = db
  }

  async getuser(userid) {
    return this.db('user').where('id', userid).first()
  }

}

module.exports = UserModel