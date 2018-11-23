import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import NavBar from './NavBar/NavBar';

import { ReactComponent as ExpandIcon } from '../../icons/expand.svg';

import './SideBar.scss';


const isMobile = window.innerWidth < 1024;
class SideBar extends Component {
  state = {
    isExpanded: true,
  }

  componentDidMount() {
    if ( window.innerWidth < 1024) {
      this.setState({ isExpanded: false });
    };
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (isMobile) {
      this.setState({ isExpanded: false });
    };
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
          <ExpandIcon />
        </div>
      </aside>
    );
  }
}

export default SideBar;
