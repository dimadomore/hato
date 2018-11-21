import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBarItem from './NavBarItem/NavBarItem';

import './NavBar.scss';


class NavBar extends Component {
  state = {
    items: [
      {
        route: '/dashboard',
        title: 'Dashboard',
      },
      {
        route: '/list',
        title: 'List',
      }
    ]
  }

  render() {
    const { items } = this.state;
    const { isExpanded } = this.props;

    return (
      <nav className={`navbar ${isExpanded ? 'navbar--expanded' : ''}`}>
        {items.map(item => (
          <NavBarItem
            isExpanded={isExpanded}
            {...item}
          />
        ))
        }
      </nav>
    );
  }
}

NavBarItem.propTypes = {
  isExpanded: PropTypes.bool,
}

NavBarItem.defaultProps = {
  isExpanded: true,
}

export default NavBar;
