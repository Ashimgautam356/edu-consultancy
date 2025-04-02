"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const signup_1 = __importDefault(require("../controllers/employee/auth/signup"));
const signin_1 = __importDefault(require("../controllers/employee/auth/signin"));
const createUsers_1 = __importDefault(require("../controllers/employee/createUsers"));
const authenticate_1 = require("../middleware/authenticate");
exports.employeeRouter = (0, express_1.Router)();
exports.employeeRouter.post("/signup", signup_1.default);
exports.employeeRouter.post("/signin", signin_1.default);
exports.employeeRouter.use(authenticate_1.auth);
exports.employeeRouter.post("/create-user", createUsers_1.default);
