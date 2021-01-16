import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:1128';
const REPOS_SERVER = `${BASE_URL}/repos`;

export const GithubServiceGet = () => axios.get(REPOS_SERVER);
export const GithubServicePost = (payload) => axios.post(REPOS_SERVER, payload);