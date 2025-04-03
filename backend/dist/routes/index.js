"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const student_1 = require("./student");
const employee_1 = require("./employee");
const admin_1 = require("./admin");
const getOldMessage_1 = __importDefault(require("../controllers/room/getOldMessage"));
const getCountry_1 = __importDefault(require("../controllers/getCountry"));
exports.router = express_1.default.Router();
exports.router.use('/student', student_1.userRouter);
exports.router.use('/employee', employee_1.employeeRouter);
exports.router.use("/admin", admin_1.adminRouter);
exports.router.get("/chat/:chatId", getOldMessage_1.default);
exports.router.get("/country", getCountry_1.default);
