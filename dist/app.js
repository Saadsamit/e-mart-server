"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const basic_1 = __importDefault(require("./app/modules/basic"));
const globalErrorHandler_1 = __importDefault(require("./app/errors/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/errors/notFound"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", basic_1.default);
app.use('/api', routes_1.default);
app.use(notFound_1.default);
app.use(globalErrorHandler_1.default);
exports.default = app;
