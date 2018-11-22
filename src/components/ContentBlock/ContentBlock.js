import React from 'react';
import PropTypes from 'prop-types';
import Block from '../Block/Block';

import './ContentBlock.scss';


function ContentBlock(props) {
  return (
    <Block className="content-block">
      <h3>{props.header}</h3>
      <p>{props.content}</p>
    </Block>
  );
}

ContentBlock.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.bool,
}

ContentBlock.defaultProps = {
  background: false,
  header: '',
  content: '',
}

export default ContentBlock;
