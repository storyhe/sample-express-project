"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const context_1 = __importDefault(require("../context"));
const router = express_1.default.Router();
router.get('/me', context_1.default.controller.User.vaildUser, async (req, res) => {
    if (req.session.view) {
        req.session.view++;
    }
    else {
        req.session.view = 1;
    }
    res.success({ 'success': true, 'message': ':D', 'view': req.session.view }, 'success');
});
router.get('/put', async (req, res) => {
    // let data = await db.Users.create({
    //   name: 'hello :)'
    // })
    // res.status(201).json(data)
    return res.status(201);
});
router.get('/get/:userid', async (req, res) => {
    const user = await context_1.default.model.User.getuser(1);
    res.success(user, 'success');
});
router.get('/stock/:userid', async (req, res) => {
    throw new Error("Hello error!");
    const userid = req.params.userid;
    const user = await context_1.default.model.Stock.getuser(userid);
    res.success(user, 'success');
});
module.exports = router;
