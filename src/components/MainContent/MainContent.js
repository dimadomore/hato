import React from 'react';
import PropTypes from 'prop-types';

import './MainContent.scss';


function MainContent({ children }) {
  return (
    <div className="main-content">
      {children}
    </div>
  );
}

MainContent.propTypes = {
  children: PropTypes.node,
}

MainContent.defaultProps = {
  children: null,
}

export default MainContent;
