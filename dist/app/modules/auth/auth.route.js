"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const route = (0, express_1.Router)();
route.post('/signup', (0, validateRequest_1.default)(auth_validation_1.signupSchemaValidation), auth_controller_1.authController.creartUser);
route.post('/login', (0, validateRequest_1.default)(auth_validation_1.loginSchemaValidation), auth_controller_1.authController.loginUser);
exports.authRoute = route;
