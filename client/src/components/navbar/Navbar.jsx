import React from 'react';
import Search from '../search/Search.jsx';
import { navbar, searchlogo } from './Navbar.css.js';

const NavBar = (props) => {
  return (
    <div style={navbar}>
      <img style={searchlogo} src={'https://icons-for-free.com/iconfiles/png/512/developers+github+github+logo+web+design+web+development+icon-1320196083747626912.png'} />
      <Search onSearch={props.onSearch} />
    </div>
  );
};

export default NavBar;