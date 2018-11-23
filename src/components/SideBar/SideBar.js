import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import NavBar from './NavBar/NavBar';

import { ReactComponent as ExpandIcon } from '../../icons/expand.svg';

import './SideBar.scss';


class SideBar extends Component {
  state = {
    isExpanded: true,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { isExpanded } = this.state;

    if (isExpanded && window.innerWidth < 1024) {
      this.setState({ isExpanded: false });
    };
    // if (!isExpanded && window.innerWidth > 1024) {
    //   this.setState({ isExpanded: true });
    // };
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
