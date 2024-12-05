"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("./handleZodError"));
const globalErrorHandler = (err, req, res, next) => {
    let status = (err === null || err === void 0 ? void 0 : err.status) || 500;
    let message = (err === null || err === void 0 ? void 0 : err.message) || 'Something went wrong!';
    let errorMessages = [
        {
            path: (err === null || err === void 0 ? void 0 : err.path) ? err === null || err === void 0 ? void 0 : err.path : '',
            message,
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        status = simplifiedError.status;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    if (err) {
        res.json({
            success: false,
            status,
            errorMessages,
            message,
        });
    }
};
exports.default = globalErrorHandler;
