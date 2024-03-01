import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use('/auth', );

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
