import express, {Request, Response} from "express";
import { User } from "../entity/User";
import { RTCDataSource } from "../data-source";

export const getAllUsers = async (req: Request, res: Response) => {
    const userRepository = RTCDataSource.getRepository(User);

    try {
        const users = await userRepository.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const userRepository = RTCDataSource.getRepository(User);
    const userId = req.params;

    try {
        const user = await userRepository.findOne(userId);

        if(user) res.status(200).json(user);
        else res.status(404).json({message: 'User not found'})
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createUser = async (req: Request, res: Response) => {
    const userRepository = RTCDataSource.getRepository(User);

    try {
        let user = new User();
        user = req.body;
        await userRepository.save(user);

        res.status(200).json({message: "User created", content: user})
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const userRepository = RTCDataSource.getRepository(User);

    try {
        const userId = Number(req.params);
        const userToBeDeleted = await userRepository.findOneBy({
            id: userId,
        })
        if(userToBeDeleted) {
            await userRepository.remove(userToBeDeleted);
        } else res.status(404).json({message: "User not found"});

        res.status(200).json({message: "User deleted"})
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const userRepository = RTCDataSource.getRepository(User);

    try {
        const data = req.body;
        const userId = Number(req.params);
        const userToBeUpdated = await userRepository.findOneBy({
            id: userId,
        })
        if(userToBeUpdated){
            Object.assign(userToBeUpdated, data);
            await userRepository.save(userToBeUpdated);
        } else res.status(404).json({message: "User not found"});

        res.status(200).json({message: "User created", content: userToBeUpdated})
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}