import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AddIcon } from '../../icons/add.svg';

import './TopBar.scss';


function TopBar() {
  return (
    <div className="topbar">
      <Link
        to="/add-user"
        className="topbar_add-user"
      >
        <div className="topbar_add-user__icon">
          <AddIcon />
        </div>
        <span className="topbar_add-userr__label">Add user</span>
      </Link>
    </div>
  );
}

export default TopBar;
