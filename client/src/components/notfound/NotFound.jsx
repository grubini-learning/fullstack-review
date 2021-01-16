import React from 'react';
import { notFound, notFoundImage } from '../notfound/NotFound.css.js';

const NotFound = (props) => {
  return (
    <div style={notFound}>
      <h1 className="box">Github handle does not exist, please try again</h1>
      <img
        style={notFoundImage}
        src="https://pngimg.com/uploads/github/github_PNG35.png" />
    </div>
  );
};

export default NotFound;