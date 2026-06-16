const express = require('express');
const app = express();

app.get('/umapalavra', (req, res) => {
    res.send('Hello World!');
});

app.post('/duaspalavra', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running');
});