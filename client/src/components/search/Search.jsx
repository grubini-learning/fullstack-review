import React from 'react';
import _ from 'lodash';
import {
  searchwrapper,
  searchinput,
  searchiconwrapper,
  searchicon
} from './Search.css.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.find = _.debounce((term) => this.props.onSearch(term), 1000);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.find(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div style={searchwrapper}>
        <input style={searchinput} value={this.state.term} onChange={this.onChange.bind(this)} />
        <div style={searchiconwrapper} onClick={this.search.bind(this)}>
          <img
            style={searchicon}
            src={'https://findicons.com/files/icons/694/longhorn_r2/256/search.png'}
          />
        </div>
      </div>
    );
  }
}

export default Search;