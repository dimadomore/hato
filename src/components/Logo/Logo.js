import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';


function Logo({ type, className }) {
  return (
    <div className={`logo ${className}`}>
      <span className="logo__text">
        {type === 'short' ? 'H' : 'HATO'}
      </span>
    </div>
  );
}

Logo.propTypes = {
  type: PropTypes.oneOf(['long', 'short']),
  className: PropTypes.string,
};

Logo.defaultProps = {
  type: 'short',
  className: '',
}

export default Logo;
