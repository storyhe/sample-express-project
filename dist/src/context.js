"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./controller/user"));
const user_2 = __importDefault(require("./model/user"));
const stock_1 = __importDefault(require("./model/stock"));
const db_1 = __importDefault(require("../db"));
exports.default = {
    controller: {
        'User': new user_1.default()
    },
    model: {
        'User': new user_2.default(db_1.default),
        'Stock': new stock_1.default(db_1.default),
    },
};
