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
exports.default = signin;
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_1.PrismaClient();
        const UserInput = zod_1.default.object({
            email: zod_1.default.string().max(30).min(3).trim().toLowerCase(),
            password: zod_1.default.string().min(6),
        });
        const isValid = UserInput.safeParse({
            email: req.body.email,
            password: req.body.password,
        });
        if (!isValid.success) {
            const errorMessage = isValid.error.formErrors;
            res.status(411).json({
                email: errorMessage.fieldErrors.email,
                password: errorMessage.fieldErrors.password,
            });
            return;
        }
        const isUserValid = yield client.admin.findFirst({ where: { email: req.body.email } });
        const fromUserTable = yield client.user.findFirst({ where: { email: req.body.email } });
        if (!isUserValid) {
            res.status(404).json({
                message: "user not availabel"
            });
            return;
        }
        if (!fromUserTable) {
            res.status(404).json({
                message: "user not availabel"
            });
            return;
        }
        const isCorrectPassword = yield bcrypt_1.default.compare(req.body.password, String(isUserValid.passwordHash));
        if (!isCorrectPassword) {
            res.status(411).json({
                message: "password is incorrect"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            userId: fromUserTable.id
        }, `${process.env.JWT_SECRET}`);
        res.cookie("authToken", token, {
            httpOnly: true, // Prevents JavaScript access (XSS protection)
            secure: false, // Only send on HTTPS in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // Expires in 7 days
        });
        const userInfo = {
            fullName: fromUserTable.name,
            userId: fromUserTable.id
        };
        res.status(200).json({ message: "Login successful", token: token, userInfo });
        ;
    });
}
