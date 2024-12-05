const http = require('http');

const connectDB = require('./DB/connection').connectDB;

const express = require('express');
const app = express();
const server = http.createServer(app);


connectDB.connectDB(() => {
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});