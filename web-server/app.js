const http = require('http');

const connectDB = require('./DB/connection').connectDB;

const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');

const sensorCapturingRoute = require('./routes/sensor-capturing')
const manualPictureRoute = require('./routes/manual-picture')

app.use(bodyParser.json());
app.use(cors());


app.use('/sensor', sensorCapturingRoute);
app.use('/manual', manualPictureRoute);


app.use('/', (req, res) => {
    console.log("call has arraived");
    res.send('<h2> שוורץ ימניאק </h2>');
});

connectDB(() => {
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});