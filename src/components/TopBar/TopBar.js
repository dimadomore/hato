import React, { Component } from 'react';
import './TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="add-user">
          <span className="add-user__icon">+</span>
          <span className="add-user__label">Add user</span>
        </div>
      </div>
    );
  }
}

export default TopBar;
