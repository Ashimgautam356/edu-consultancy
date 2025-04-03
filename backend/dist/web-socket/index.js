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
const ws_1 = require("ws");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const client = new client_1.PrismaClient();
const users = [];
function checkUser(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.JWT_SECRET}`);
        console.log(decoded);
        if (typeof decoded == 'string') {
            return null;
        }
        if (!decoded || !decoded.userId) {
            return null;
        }
        return decoded.userId;
    }
    catch (er) {
        return null;
    }
}
wss.on('connection', function connection(ws, request) {
    var _a;
    const url = request.url;
    if (!url) {
        return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = (_a = queryParams.get('token')) !== null && _a !== void 0 ? _a : "";
    const userId = checkUser(token);
    if (userId == null) {
        ws.close();
        return null;
    }
    users.push({
        userId,
        rooms: [],
        ws: ws
    });
    ws.on("message", function message(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // parsing data into json first
            const parsedData = JSON.parse(data);
            if (parsedData.type === "join-room") {
                // for now any one can join the room , we have to first  check the db first that this room does 
                // exist or not , and then we can do other moidficaiton like this user can join or not and other modification
                const user = users.find(x => x.ws === ws);
                user === null || user === void 0 ? void 0 : user.rooms.push(parsedData.roomId);
            }
            if (parsedData.type === 'leave-room') {
                const user = users.find(x => x.ws === ws);
                if (!user) {
                    return;
                }
                user.rooms = user === null || user === void 0 ? void 0 : user.rooms.filter(x => x === parsedData.room);
            }
            if (parsedData.type === 'chat') {
                const roomId = parsedData.roomId;
                const message = parsedData.message;
                // await client.chat.create({
                //     data:{
                //         roomId,
                //         message,
                //         userId
                //     }
                // }) 
                users.forEach(user => {
                    if (user.rooms.includes(roomId)) {
                        user.ws.send(JSON.stringify({
                            type: "chat",
                            message: message,
                            roomId
                        }));
                    }
                });
            }
        });
    });
});
