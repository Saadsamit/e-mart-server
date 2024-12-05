"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    let response = {
        success: data.success,
        status: data.status,
        message: data.message,
        data: data.data,
        token: data.token
    };
    res.status(data === null || data === void 0 ? void 0 : data.status).json(response);
};
exports.default = sendResponse;
