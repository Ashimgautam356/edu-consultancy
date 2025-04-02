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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deleteUser;
const client_1 = require("@prisma/client");
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_1.PrismaClient();
        const deleteuserId = req.body.deleteuserId;
        const userType = req.body.userType;
        console.log(deleteuserId);
        try {
            const exist = yield client.user.findUnique({ where: { id: deleteuserId } });
            console.log(exist);
            if (!exist) {
                res.status(403).json({
                    message: "user doesn't  exist"
                });
                return;
            }
            const role = exist.role;
            if (role === "STUDENT") {
                yield client.student.delete({ where: {
                        email: exist.email
                    } });
                yield client.user.delete({ where: {
                        email: exist.email
                    } });
                res.status(200).json({
                    message: "signup sucessfull"
                });
                return;
            }
            yield client.employee.delete({ where: {
                    email: exist.email,
                }
            });
            yield client.user.delete({ where: {
                    email: exist.email
                } });
            res.status(200).json({
                message: "signup sucessfull"
            });
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) == 11000) {
                res.status(411).json({
                    message: "employee doesn't exist"
                });
                return;
            }
            console.log(err);
            res.status(500).json({
                message: "internal server error",
                error: err
            });
        }
    });
}
