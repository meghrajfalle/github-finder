import React, { Component } from 'react';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      location,
      login,
      name,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      hireable
    } = this.props.user;

    const loading = this.props;
    return <div>{name}</div>;
  }
}

export default User;
