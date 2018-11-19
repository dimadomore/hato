import React from 'react';
import PropTypes from 'prop-types';
import './NavBarItem.scss';

import { ReactComponent as DasboardIcon } from '../icons/Dashboard.svg';
import { ReactComponent as ListIcon } from '../icons/List.svg';


function NavBarItem({ title, isActive, isExpanded}) {
  
  return (
    <div className={`navbar-item ${isActive ? 'navbar-item--active' : ''} ${isExpanded ? 'navbar-item--expanded' : ''}`}>
      <div className="navbar-item__icon">
        {NavBarItem.icons[title.toLowerCase()]}
      </div>
      {isExpanded && (
        <div className="navbar-item__title">
          {title}
        </div>
      )
      }
    </div>
  );
}

NavBarItem.icons = {
  list: <ListIcon />,
  dashboard: <DasboardIcon />,
}

NavBarItem.propTypes = {
  icon: PropTypes.component,
  title: PropTypes.string, 
  isActive: PropTypes.bool,
  isExpanded: PropTypes.bool,
}

NavBarItem.defaultProps = {
  icon: null,
  title: '', 
  isActive: false,
  isExpanded: true,
}

export default NavBarItem;
