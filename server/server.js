const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(cookieParser());

// require('./socket/index');

require('dotenv').config();
const { port } = require('./utils/secret.utils');
const auth_token = require('./utils/auth.util');

const userRouter = require('./routers/user.router');
const adminRouter = require('./routers/admin.router');
const billRouter  = require('./routers/bills.router')
const cartRouter  = require('./routers/cart.router')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(userRouter);
app.use(billRouter);
app.use(cartRouter);
app.use(auth_token, adminRouter);

app.get('/', (req,res)=>{
    res.send("Live")
})
app.listen(port , () => {
    console.log(`port ${port}`);
});