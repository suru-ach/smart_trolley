const express = require('express');
require('dotenv').config();
const cors = require('cors');


const registerUser = require('./Routes/Register')
const loginUser = require('./Routes/Login')

const app = express();
const port = process.env.PORT;


app.use(cors());
// app.use('/register', registerUser);
app.use('/login', loginUser);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
