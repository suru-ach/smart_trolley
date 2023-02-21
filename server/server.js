const express = require('express');
const app = express();
require('dotenv').config();
const { port } = require('./utils/secret.utils');

const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(userRouter);
app.use(adminRouter);

app.listen(port , () => {
    console.log(`port ${port}`);
})