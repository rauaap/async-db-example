import express from 'express';
import http from 'http';
import database from './database.js';

import userRouter from './routes/user.js';
import accountRouter from './routes/account.js';
const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/account', accountRouter);

const server = http.createServer(app);
server.listen(8008);
