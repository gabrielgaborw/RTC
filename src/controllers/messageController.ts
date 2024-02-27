import express, {Request, Response} from "express";
import router from "../routes/messageRoute";



export const getChat = async (req: Request, res: Response) => {
    res.sendFile('index.html', { root: './public' });
}