"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockModel {
    constructor(db) {
        this.db = db;
    }
    async getuser(userid) {
        return this.db('stock').where('id', userid).first();
    }
}
exports.default = StockModel;
