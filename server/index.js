const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getReposByUsername, repositoryExtraction, dataCuration } = require('../helpers/github');
const { save, read, readOne } = require('../database/index');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { username } = req.body;
  getReposByUsername(username)
    .then(result => result.data)
    .then(results => repositoryExtraction(results))
    .then(repositories => save({ user: username, repositories }))
    .then(result => {
      if (!result) {
        throw result;
      }
      return result;
    })
    .then((result) => {
      readOne(username)
        .exec((err, records) => {
          if (err) {
            res.status(404).send({ message: 'Oops there was an error, try again' });
          } else {
            res.status(200).send(dataCuration(records));
          }
        });
    })
    .catch(e => {
      console.log(e);
      res.status(404).send({ message: 'Oops there was an error' });
    });
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  read()
    .exec((err, records) => {
      if (err) {
        res.status(404).send({ message: 'Oops there was an error' });
      } else {
        res.status(200).send(dataCuration(records));
      }
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

