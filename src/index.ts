import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import messageRoutes from './routes/messageRoute';
import userRoutes from './routes/userRoute';
import { handleSocketConnection } from './services/messageService';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use('/msg', messageRoutes);
app.use('/user', userRoutes);

handleSocketConnection(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
