import React, { Component } from 'react';
import NavBar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import '../.env.local';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get('https://api.github.com/users');
  //   this.setState({ users: res.data, loading: false });
  // }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
