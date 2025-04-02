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
exports.default = addCountry;
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
function addCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_1.PrismaClient();
        const UserInput = zod_1.default.object({
            country: zod_1.default.string()
        });
        const isValid = UserInput.safeParse({
            country: req.body.country
        });
        if (!isValid.success) {
            const errorMessage = isValid.error.formErrors;
            res.status(411).json({
                country: errorMessage.fieldErrors.country
            });
            return;
        }
        try {
            const exist = yield client.countries.findFirst({ where: { country: req.body.country } });
            if (exist) {
                res.status(403).json({
                    message: "country already exist"
                });
                return;
            }
            yield client.countries.create({ data: {
                    country: req.body.country
                } });
            res.status(200).json({
                message: "country added"
            });
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) == 11000) {
                res.status(411).json({
                    message: "country already exists"
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
