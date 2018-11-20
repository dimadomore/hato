import React, { Component } from 'react';
import './TableListContainer.scss';

import TableList from './TableList/TableList';
import SearchBar from './SearchBar/SearchBar';


class TableListContainer extends Component {
  
  render() {
    return (
      <div className="">
        <SearchBar />
        <TableList />
      </div>
    );
  }
}

export default TableListContainer;
