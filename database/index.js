const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repositoriesSchema = mongoose.Schema({
  // TODO: your schema here!
  user: { type: String, unique: true, index: true, required: true, dropDups: true },
  repositories: [mongoose.Schema({
    repoId: { type: Number, unique: true },
    name: { type: String, required: true },
    description: String,
    html_url: { type: String, required: true },
    watchers: { type: Number, required: true },
    forks: { type: Number, required: true },
    updated_at: { type: Date, required: true }
  })],
});

const Repositories = mongoose.model('Repositories', repositoriesSchema);


let save = (user = {}) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  return Repositories.findOneAndUpdate({ user: user.user }, user, { upsert: true });
  // return Repositories.create(user);z
}

const read = (username) => {

  return Repositories.aggregate({ $unwind: '$repositories' }, { $sort: { 'repositories.watchers': -1 } }).limit(25);
};

const readOne = (user) => {
  return Repositories.aggregate({ $unwind: '$repositories' }, { $sort: { 'repositories.watchers': -1 } }, { $match: { user } }).limit(25);
}

module.exports = {
  save,
  read,
  readOne
};