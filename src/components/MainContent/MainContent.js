import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MainContent.scss';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        {this.props.children}
      </div>
    );
  }
}

MainContent.propTypes = {
  children: PropTypes.node,
}

MainContent.defaultProps = {
  children: null,
}

export default MainContent;
