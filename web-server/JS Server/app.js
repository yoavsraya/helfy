const http = require('http');

const connectDB = require('./DB/connection').connectDB;

const express = require('express');
const app = express();
const server = http.createServer(app);

const capturingRoute = require('./routes/capturing')

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/data', capturingRoute);


app.use('/', (req, res) => {
    console.log("call has arraived");
    res.send('<h2> שוורץ ימניאק </h2>');
});

connectDB(() => {
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});