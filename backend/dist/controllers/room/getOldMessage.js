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
exports.default = getOldMessage;
const client_1 = require("@prisma/client");
function getOldMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_1.PrismaClient();
        const roomId = Number(req.params.chatId);
        try {
            const messages = yield client.message.findMany({
                where: { chatId: roomId },
                include: {
                    sender: {
                        select: {
                            name: true
                        }
                    }
                },
                orderBy: {
                    id: "asc"
                },
                take: 50
            });
            res.status(200).json({
                messages
            });
        }
        catch (err) {
            console.log("error while getting message");
            console.log(err);
        }
    });
}
