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
exports.default = createUni;
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
function createUni(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_1.PrismaClient();
        const UserInput = zod_1.default.object({
            countryId: zod_1.default.number(),
            uniName: zod_1.default.string()
        });
        const isValid = UserInput.safeParse({
            countryId: req.body.countryId,
            uniName: req.body.uniName
        });
        if (!isValid.success) {
            const errorMessage = isValid.error.formErrors;
            res.status(411).json({
                countryId: errorMessage.fieldErrors.countryId,
                uniName: errorMessage.fieldErrors.uniName
            });
            return;
        }
        try {
            const exist = yield client.universities.findFirst({ where: { name: req.body.uniName } });
            if (exist) {
                res.status(403).json({
                    message: "uni already exist"
                });
                return;
            }
            yield client.universities.create({ data: {
                    countryId: req.body.countryId,
                    name: req.body.uniName
                } });
            res.status(200).json({
                message: "inserted"
            });
        }
        catch (err) {
            if ((err === null || err === void 0 ? void 0 : err.code) == 11000) {
                res.status(411).json({
                    message: "uni Already exist"
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
