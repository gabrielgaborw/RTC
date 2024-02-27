import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { MessageDataSource } from './data-source';
import { Message } from './entity/Message';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const messageRepository = MessageDataSource.getRepository(Message)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', async (msg: string) => {
        const newMsg = new Message();
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
