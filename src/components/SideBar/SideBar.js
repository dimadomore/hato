import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import NavBar from './NavBar/NavBar';

import './SideBar.scss';

class SideBar extends Component {
  state = {
    isExpanded: true,
  }

  handleToggle = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded}));
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <aside className={`sidebar ${isExpanded ? 'sidebar--expanded' : ''}`}>
        <div className="sidebar__logo">
          <Logo />
        </div>
        <NavBar isExpanded={isExpanded} />
        <div 
          className="sidebar__toggle"
          onClick={this.handleToggle}
        >
          {'<'}
        </div>
      </aside>
    );
  }
}

export default SideBar;
