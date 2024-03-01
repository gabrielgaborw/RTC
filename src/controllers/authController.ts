import {Request, Response} from "express";

export const login = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}