import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController";

const router = express.Router();

// Returns all users currently in database
router.get('/all', getAllUsers);

// Returns the user with the given id (if it is in database)
router.get('/:id', getUserById);

// Adds a user in the database
router.post('/', createUser);

// Removes a user from the database
router.delete('/:id', deleteUser);

// Updates a user's info
router.put('/:id', updateUser);

export default router;