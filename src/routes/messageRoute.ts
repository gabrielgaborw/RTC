import express from "express";
import { createMessage, getAllMessages } from "../controllers/messageController";

const router = express.Router();

// DONE: get all messages route
router.get('/all', getAllMessages);
// DONE: post a message route
router.post('/', createMessage);
// TODO: get some messages (for when a user first enters the chatroom) and load more as they scroll up
// TODO: delete message (maybe after implementing users & authentication)
// TODO: edit message
// TODO: react to message (maybe)

export default router;