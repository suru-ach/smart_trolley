const express = require('express');
const app = express();
require('dotenv').config();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');

const cors = require('cors');
const cookieParser = require('cookie-parser');

const { port } = require('./utils/secret.utils');
const auth_token = require('./utils/auth.util');

const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5000'
    }
});
const { connect_socket } = require('./socket/index');
connect_socket(io);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(cookieParser());

app.use(userRouter);
app.use(auth_token, adminRouter);

httpServer.listen(port , () => {
    console.log(`port ${port}`);
});