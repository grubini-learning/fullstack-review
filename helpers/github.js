const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let headers = {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  };
  return axios.get(`https://api.github.com/users/${username}/repos`, headers);
};

const repositoryExtraction = (rawData) => {
  return rawData.map(repo => {
    const { id, name, description, html_url, watchers, forks, updated_at } = repo;
    return {
      repoId: id,
      name,
      description,
      html_url,
      watchers,
      watchers,
      forks,
      updated_at
    }
  });
};
const dataCuration = (data) => {
  let user;
  const repositories = data.map(repo => {
    user = repo.user;
    const { _id, name, description, html_url, forks, watchers, updated_at } = repo.repositories;
    return {
      id: _id,
      name,
      description,
      html_url,
      forks,
      watchers,
      updated_at
    }
  });
  return { user, repositories };
};

module.exports = {
  getReposByUsername,
  repositoryExtraction,
  dataCuration
};