"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (_req, res, _next) => {
    res.status(404).json({
        success: false,
        message: 'API Not Found !',
        error: 'API Not Found !',
    });
};
exports.default = notFound;
