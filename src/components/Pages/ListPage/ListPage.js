import React from 'react';

import Block from '../../Block/Block'
import TableListContainer from './TableListContainer/TableListContainer';

import './ListPage.scss';


function ListPage() {
  return (
    <div className="page list-page">
      <Block className="block-table">
        <TableListContainer />
      </Block>
    </div>
  );
}

export default ListPage;
