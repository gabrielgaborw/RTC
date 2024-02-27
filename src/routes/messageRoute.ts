import express from "express";
import { getChat } from "../controllers/messageController";

const router = express.Router();

// placeholder
router.get('/all', getChat);

// TODO: get all messages route
// TODO: post a message route
// TODO: get some messages (for when a user first enters the chatroom) and load more as they scroll up
// TODO: delete message (maybe after implementing users & authentication)
// TODO: edit message
// TODO: react to message (maybe)

export default router;