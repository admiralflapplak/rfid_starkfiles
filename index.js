const { request } = require('express');
const express = require('express');
const Datastore = require('nedb');

const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log('listening at 3000');
});
app.use(express.static('views'));
app.use(express.json()); 

const database = new Datastore("database.db");
database.loadDatabase();

app.post('/rfidInfo', (request, response) => {
    console.log('request recived');
    console.log(request.body);
    const data = request.body;
    database.insert(data);
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    });
});