import React, { Component } from 'react';
import './ListPage.scss';

import Block from '../../Block/Block'
import TableListContainer from './TableListContainer/TableListContainer';

class ListPage extends Component {

  render() {
    return (
      <div className="page list-page">
        <Block className="block-table">
          <TableListContainer />
        </Block>
      </div>
    );
  }
}

export default ListPage;
