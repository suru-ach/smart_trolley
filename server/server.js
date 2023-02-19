const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    return res.json({data: "works"});
})

app.listen(5000, () => {
    console.log('port 5000');
})