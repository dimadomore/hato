import React from 'react';
import PropTypes from 'prop-types';

import './Block.scss';


function Block({ bgColor, className, children}) {
  return (
    <div 
      className={`block ${className}`}
      style={{ backgroundColor: bgColor ? bgColor : 'none'}}
    >
      {children}
    </div>
  );
}

Block.propTypes = {
  bgColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
}

Block.defaultProps = {
  bgColor: 'white',
  className: '',
  children: null,
}

export default Block;
