import React, { Component } from 'react';
import './TableListContainer.scss';

import TableList from './TableList/TableList';
import SearchBar from './SearchBar/SearchBar';


class TableListContainer extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'George Teaman',
        email: 'george@oneest.com',
        phoneNumber: '069696969',
        dateBirth: '19.12.1990',
        languages: ['EN', 'RO'],
      },
      {
        id: 2,
        name: 'Andrei Tabirta',
        email: 'adrian@oneest.com',
        phoneNumber: '069696969',
        dateBirth: '19.12.1990',
        languages: ['EN', 'RO'],
      },
    ],
  }

  render() {
    const { items } = this.state;
    return (
      <div className="">
        <SearchBar />
        <TableList 
          items={items}
        />
      </div>
    );
  }
}

export default TableListContainer;
