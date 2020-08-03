import React, { Component } from 'react';
import NavBar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
      </div>
    );
  }
}

export default App;
