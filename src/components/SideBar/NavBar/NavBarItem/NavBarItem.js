import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ReactComponent as DasboardIcon } from '../../../../icons/dashboard.svg';
import { ReactComponent as ListIcon } from '../../../../icons/list.svg';

import './NavBarItem.scss';


function NavBarItem({ title, route, isExpanded }) {
  return (
    <NavLink
      to={route}
      className={`navbar-item ${isExpanded ? 'navbar-item--expanded' : ''}`}
      activeClassName="navbar-item--active"
    >
      <div className="navbar-item__icon">
        {NavBarItem.icons[title.toLowerCase()]}
      </div>
      {isExpanded && (
        <div className="navbar-item__title">
          {title}
        </div>
      )
      }
    </NavLink>
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
