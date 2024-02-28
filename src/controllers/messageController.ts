import express, {Request, Response} from "express";
import router from "../routes/messageRoute";
import { Message } from "../entity/Message";
import { MessageDataSource } from "../data-source";

export const getAllMessages = async (req: Request, res: Response) => {
    const messageRepository = MessageDataSource.getRepository(Message);

    try {
        const messages = await messageRepository.find();
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createMessage = async (req: Request, res: Response) => {
    const messageRepository = MessageDataSource.getRepository(Message);

    try {
        let msg = new Message();
        msg = req.body;
        await messageRepository.save(msg);

        res.status(200).json({message: "Message added to database", content: msg})
    } catch (error) {
        console.error('Error adding message in databse:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}