"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(db) {
        this.db = db;
    }
    async getuser(userid) {
        return this.db('user').where('id', userid).first();
    }
}
exports.default = UserModel;
