import React from 'react';
import Repository from '../respository/repository.jsx';
import { grid, link, outerGrid } from './repositories.css.js';

const Repositories = (props) => {
  const { repos = [], user = '' } = props;
  return (
    <div style={outerGrid}>
      <h3 style={link}>@{user}</h3>
      <div style={grid}>
        {
          repos.map((repo, index) => {
            return <Repository
              key={repo.id}
              repo={repo}
            />
          })
        }
      </div>
    </div>
  );
};

export default Repositories;