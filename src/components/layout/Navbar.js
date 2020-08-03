import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defautlProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
