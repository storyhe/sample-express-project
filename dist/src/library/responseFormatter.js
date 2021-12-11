"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseFormatter = (req, res, next) => {
    res.success = (data, message) => res.json({
        success: true,
        data,
        message,
    });
    res.failed = (payload, errorData) => {
        if (payload.code)
            res.status(payload.code);
        else if (res.statusCode < 400 || res.statusCode > 500)
            res.status(400);
        return res.json({
            success: false,
            error: {
                data: errorData,
            },
            message: payload.message
        });
    };
    next();
};
exports.default = responseFormatter;
