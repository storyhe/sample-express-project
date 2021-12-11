"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
const config_js_1 = __importDefault(require("../config.js"));
const RedisStore = require('connect-redis')(express_session_1.default);
const index_1 = __importDefault(require("./routes/index"));
const responseFormatter_1 = __importDefault(require("./library/responseFormatter"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [],
    credentials: true,
}));
app.use((0, express_session_1.default)({
    secret: config_js_1.default.SECRET_KEY,
    saveUninitialized: true,
    resave: false,
    store: new RedisStore({
        client: config_js_1.default.redis.session
    })
}));
app.use((0, helmet_1.default)());
app.use('/static', express_1.default.static('./src/static'));
app.use(responseFormatter_1.default);
app.use(index_1.default);
app.get('/', (req, res) => {
    res.send('hello :)');
});
// 404 Not Found
app.use((req, res, next) => {
    var err = new Error('Not Found');
    next(err);
});
app.use(function (err, req, res, next) {
    // Do logging and user-friendly error message display
    console.error(err.stack);
    res.status(500).send({ status: 500, message: 'internal error', type: 'internal' });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
