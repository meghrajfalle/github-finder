import React, { useContext, Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import GithubContext from '../../context/github/githubContext';

const Home = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (!loading && users.length == 0) {
    return (
      <Fragment>
        <Search />
        <Users />
        <br />
        <h3 style={{ textAlign: 'center' }}>
          Search for the github user that you would love to know about and
          checkout his profile and repository details!{' '}
        </h3>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
