import React from 'react';
import moment from 'moment';
import { card, container, subContainer, subsubcont, url } from './repository.css.js';

const Repository = (props) => {
  const {
    name = 'No name',
    updated_at = '00/00/0000',
    description = 'no description',
    html_url = 'no url',
    forks = 0,
    watchers = 0
  } = props.repo;
  return (
    <div style={card}>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
      <div style={container}>
        <h4><b>{name}</b></h4>
        <p>Updated: {moment(updated_at).format("MMM Do YY")}</p>

      </div>
      <div style={subContainer}>
        <div style={subsubcont}>
          <p>{description}</p>
          <p><a style={url} href={html_url}>repository url</a></p>
          <p>watches: {watchers}</p>
          <p>forks: {forks}</p>
        </div>
      </div>
    </div>
  );
};

export default Repository;