"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const AppError_1 = __importDefault(require("../errors/AppError"));
const isUserExist_1 = __importDefault(require("../utils/isUserExist"));
const auth = (...roles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(401, 'you dont have access token');
        }
        const decode = jsonwebtoken_1.default.verify(token, config_1.config.jwtAccessSecret);
        const { email, role } = decode;
        const isExist = yield (0, isUserExist_1.default)(email);
        if (roles.length && !roles.includes(role)) {
            throw new AppError_1.default(401, 'You have no access to this route');
        }
        if (role !== isExist.role) {
            throw new AppError_1.default(401, 'Login Again');
        }
        req.user = {
            userId: isExist.userId,
            email,
            role,
            name: isExist === null || isExist === void 0 ? void 0 : isExist.name,
        };
        next();
    }));
};
exports.default = auth;
