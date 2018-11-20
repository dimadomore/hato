import React, { Component } from 'react';
import './TableList.scss';

import TableListItem from './TableListItem/TableListItem';

class TableList extends Component {

  render() {
    return (
      <div className="table-list">
        Table List:
        Header here
        <TableListItem />
        <TableListItem />
        <TableListItem />
      </div>
    );
  }
}

export default TableList;
