"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("../../config");
const route = (0, express_1.Router)();
route.get('/', (_req, res) => {
    res.json({
        success: true,
        massage: `server is running ${config_1.config.port}`,
    });
});
const basicRoute = route;
exports.default = basicRoute;
