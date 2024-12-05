"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
exports.config = {
    port: process.env.PORT,
    clientUrl: process.env.NODE_ENV === 'production'
        ? process.env.CLIENT_HOST_URL
        : process.env.CLIENT_LOCAL_URL,
    bcryptRound: process.env.BCRYPT_ROUNDS,
    jwtAccessSecret: process.env.BCRYPT_ROUNDS,
    jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
};
exports.default = prisma;
