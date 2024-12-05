"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basic_1 = __importDefault(require("../modules/basic"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/',
        route: basic_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
