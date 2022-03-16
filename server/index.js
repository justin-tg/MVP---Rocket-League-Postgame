//Set up Server Dev Env
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const axios = require('axios');

//Server Imports
// const db = '';
const ballchasing = 'https://ballchasing.com/api/replays/';
const endpoint = '/replays'
const controller = require('./controller/index.js');
const { token } = require('../myConfig/myConfig.js');

//Server Middleware
app.use(express.static('./client/dist'));
app.use(express.json('application/json'));
app.use(express.urlencoded( { extended: true }));

app.post(endpoint, (req, res) => {
  const { id } = req.body;
  console.log('req body: ', id.id);
  //given id from client submit a get with appropriate headers, and replay id to ballchasing api
  const route = ballchasing + id;
  axios.get(route, {
    headers: {
      "Authorization": token
    }
  })
  .then((response) => {
    console.log('successfully retrieved replay data: ', response.data)
    //save the replay data to a db if time
    res.status(201).send(response.data);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
  //res.status(201).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})