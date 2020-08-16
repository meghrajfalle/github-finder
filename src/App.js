import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';
import '../.env.local';

import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <NavBar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/users/:login' component={User} />} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
