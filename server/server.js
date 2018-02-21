const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const app = express();

var UserController = require('./controllers/user.controller');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/search_users", (req, res) => {
  UserController.getUsers().then((result) => {
    res.status(200).send({});
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/add_new_user", (req, res) => {
  UserController.addNewUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
