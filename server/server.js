const express = require('express');
const app = express();
require('dotenv').config();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');
const fs = require('fs')

const cors = require('cors');
const cookieParser = require('cookie-parser');

const { port } = require('./utils/secret.utils');
const auth_token = require('./utils/auth.util');

const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');
const billRouter = require('./routers/bill.router');

const io = new Server(httpServer, {
    cors: {
        origin: process.env.CLIENT_URL
    }
});
const { socket } = require('./controllers/bill.controller');
socket(io);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());

app.use(userRouter);
app.use(billRouter);
app.use(auth_token, adminRouter);
app.get('/', (req,res)=>{
    res.status(200).send("Live")
})
httpServer.listen(port, () => {
    console.log(`port ${port}`);
});