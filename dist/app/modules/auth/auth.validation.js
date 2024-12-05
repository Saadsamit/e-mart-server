"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchemaValidation = exports.signupSchemaValidation = void 0;
const zod_1 = require("zod");
exports.signupSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(6),
        picture: zod_1.z.string(),
    }),
});
exports.loginSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email is Required' }).email(),
        password: zod_1.z.string({ required_error: 'Password is Required' }),
    }),
});
