import { Server, Socket } from 'socket.io';
import { MessageDataSource } from '../data-source';
import { Message } from '../entity/Message';

export const handleSocketConnection = (io: Server) => {
    const messageRepository = MessageDataSource.getRepository(Message)
    
    io.on('connection', (socket: Socket) => {
        console.log('a user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('chat message', async (msg: string) => {
            io.emit('chat message', msg);

            const newMsg = new Message();
            newMsg.message = msg;
            newMsg.postedAt = new Date(Date.now());

            await messageRepository.save(newMsg);
        });
    });
};
