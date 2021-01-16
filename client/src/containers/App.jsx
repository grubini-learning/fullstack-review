import React from 'react';
import _ from 'lodash';
import NavBar from '../components/navbar/Navbar.jsx';
import { main, submainWrapper } from './App.css.js';
import Repositories from '../components/repositories/repositories.jsx';
import NotFound from '../components/notfound/NotFound.jsx';
import Spinner from '../hoc/spinner/Spinner.jsx';
import { GithubServiceGet, GithubServicePost } from '../network/github-service.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      repositories: [],
      loading: false
    }
  }

  componentDidMount() {
    const that = this;
    this.setState({ loading: true });
    GithubServiceGet()
      .then(result => result.data)
      .then(data => {
        setTimeout(() => {
          that.setState({ user: data.user, repositories: data.repositories, loading: false });
        }, 3000);
      })
      .catch(e => {
        console.log('the error ', e);
        //TODO: put error and display error message
        setTimeout(() => {
          that.setState({ repositories: [], loading: false });
        }, 3000);
      });
  }

  onSearch(username) {
    // const that = this;
    // this.setState({ loading: true });ç
    const that = this;
    this.setState({ loading: true });
    GithubServicePost({ username })
      .then(result => result.data)
      .then(data => {
        setTimeout(() => {
          that.setState({ user: data.user, repositories: data.repositories, loading: false });
        }, 3000);
      })
      .catch(e => {
        console.log('the error ', e);
        //TODO: put error and display error message
        setTimeout(() => {
          that.setState({ repositories: [], loading: false });
        }, 3000);
      });
  }

  render() {
    return (
      <div style={main}>
        <NavBar onSearch={this.onSearch.bind(this)} />
        <Spinner loading={this.state.loading}>
          <div style={submainWrapper}>
            {
              (this.state.repositories.length === 0) ? <NotFound /> : <Repositories
                user={this.state.user}
                repos={this.state.repositories} />
            }
          </div>
        </Spinner>
      </div>
    );
  }
}

export default App;