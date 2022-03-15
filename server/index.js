//Set up Server Dev Env
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

//Server Imports
// const db = '';
const endpoint = 'https://ballchasing.com/api/replays/:id';
const controller = require('./controller/index.js');

//Server Middleware
app.use(express.static('./client/dist'));
app.use(express.json('application/json'));
app.use(express.urlencoded( { extended: true }));

app.get(endpoint, controller.getAReplay);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})