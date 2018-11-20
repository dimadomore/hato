import React, { Component } from 'react';
import './TopBar.scss';

import { ReactComponent as AddIcon } from '../../icons/add.svg';

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar_add-user">
          <div className="topbar_add-user__icon">
            <AddIcon />
          </div>
          <span className="topbar_add-userr__label">Add user</span>
        </div>
      </div>
    );
  }
}

export default TopBar;
