"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const signup_1 = __importDefault(require("../controllers/auth/signup"));
const signin_1 = __importDefault(require("../controllers/auth/signin"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", signup_1.default);
exports.userRouter.post("/signin", signin_1.default);
