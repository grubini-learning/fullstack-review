import React, { useState } from 'react';
import { spinner } from './Spinner.css.js';

const Spinner = (props) => {
  const { loading = false } = props;
  if (loading) {
    return (
      <div style={spinner}>
        <img src={'https://camo.githubusercontent.com/91753d175d8c8e42c742dfb707aa38499a6960b8/68747470733a2f2f736f6669616e6568616d6c616f75692e6769746875622e696f2f6a756e6b2f6c6f636b646f6f722f6c6f676f732f6c6f676f323035783235302e676966'} />
      </div>
    );
  } else {
    return props.children;
  }
};

export default Spinner;