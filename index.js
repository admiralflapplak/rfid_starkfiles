const { request } = require('express');
const express = require('express');
const Datastore = require('nedb');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at ${port}`);
});
app.use(express.static('views'));
app.use(express.json()); 

const database = new Datastore("database.db");
database.loadDatabase();

app.get('/rfidInfo', (request, response) => {
    database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  });

app.post('/rfidInfo', (request, response) => {
    console.log('request recived');
    console.log(request.body);
    const data = request.body;
    database.insert(data);
    response.json({
        status: 'success'
    });
});