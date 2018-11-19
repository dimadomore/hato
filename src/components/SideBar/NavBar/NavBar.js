import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBarItem from './NavBarItem/NavBarItem';

import './NavBar.css';


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
          <NavBarItem {...item} isActive={item.title === 'Dashboard' ? 1 : 0} isExpanded={isExpanded} />
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
