const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// require('./socket/index');

require('dotenv').config();
const { port } = require('./utils/secret.utils');
const auth_token = require('./utils/auth.util');

const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');
const billRouter  = require('./routers/bills.router')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(billRouter);
app.use(userRouter);
app.use(auth_token, adminRouter);


app.get('/', (req, res) => {
    res.send("Live")
})

httpServer.listen(8000, () => {
    console.log("Server listening on port 8000");
});

module.exports = io;