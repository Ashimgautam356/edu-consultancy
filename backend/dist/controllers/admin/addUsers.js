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
exports.default = addUsers;
const zod_1 = __importDefault(require("zod"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function addUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const UserInput = zod_1.default.object({
            email: zod_1.default.string().email().max(30).min(3).trim().toLowerCase(),
            password: zod_1.default.string().min(6),
            firstName: zod_1.default.string().trim().max(40),
            lastName: zod_1.default.string().trim().max(40),
            phone: zod_1.default.string().length(10),
            role: zod_1.default.enum(["STUDENT", "DOC_MANAGER", "INSTRUCTOR", "RECEPTIONIST"])
        });
        const isValid = UserInput.safeParse({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            role: req.body.role
        });
        if (!isValid.success) {
            const errorMessage = isValid.error.formErrors;
            res.status(411).json({
                email: errorMessage.fieldErrors.email,
                password: errorMessage.fieldErrors.password,
                firstName: errorMessage.fieldErrors.firstName,
                lastName: errorMessage.fieldErrors.lastName,
                phone: errorMessage.fieldErrors.phone,
                role: errorMessage.fieldErrors.role
            });
            return;
        }
        try {
            const exist = yield client.user.findFirst({ where: { email: req.body.email } });
            if (exist) {
                res.status(403).json({
                    message: "email already exist"
                });
                return;
            }
            const fullName = req.body.firstName.trim() + " " + req.body.lastName.trim();
            const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 5);
            yield client.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                if (req.body.role === "STUDENT") {
                    yield tx.student.create({
                        data: {
                            email: req.body.email,
                            passwordHash: hashedPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phone: req.body.phone
                        }
                    });
                    yield tx.user.create({
                        data: {
                            email: req.body.email,
                            name: fullName,
                            role: "STUDENT"
                        }
                    });
                }
                else {
                    yield tx.employee.create({
                        data: {
                            email: req.body.email,
                            passwordHash: hashedPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phone: req.body.phone,
                            role: req.body.role
                        }
                    });
                    yield tx.user.create({
                        data: {
                            email: req.body.email,
                            name: fullName,
                            role: req.body.role
                        }
                    });
                }
            }));
            res.status(200).json({ message: "Signup successful" });
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) === "P2002") {
                res.status(411).json({ message: "Email already exists" });
                return;
            }
            console.error(err);
            res.status(500).json({ message: "Internal server error", error: err });
        }
    });
}
