"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const data_source_1 = require("./data-source");
const Message_1 = require("./entity/Message");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
const messageRepository = data_source_1.MessageDataSource.getRepository(Message_1.Message);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', async (msg) => {
        const newMsg = new Message_1.Message();
        newMsg.message = msg;
        newMsg.postedAt = new Date(Date.now());
        await messageRepository.save(newMsg);
        const allUsers = await messageRepository.find();
        console.log(allUsers);
        io.emit('chat message', msg);
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});
