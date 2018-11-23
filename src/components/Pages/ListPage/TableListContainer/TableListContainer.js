import React, { Component } from 'react';

import TableList from './TableList/TableList';
import SearchBar from './SearchBar/SearchBar';

import localStorage from '../../../../localStorageHandler';

import './TableListContainer.scss';


class TableListContainer extends Component {
  state = {
    filter: '',
    sortColumn: 0,
    items: localStorage.get('users'),
    // items: [
    //   {
    //     id: 1,
    //     name: 'George Teaman',
    //     email: 'george@oneest.com',
    //     phoneNumber: '069696969',
    //     dateBirth: '19.12.1990',
    //     languages: ['EN', 'RO'],
    //   },
    //   {
    //     id: 2,
    //     name: 'Andrei Tabirta',
    //     email: 'adrian@oneest.com',
    //     phoneNumber: '069696969',
    //     dateBirth: '19.12.1990',
    //     languages: ['EN', 'RO'],
    //   },
    // ],
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      const newItems = prevState.items.filter((_, index) => index !== id - 1);
      localStorage.set('users', newItems);
      return { items: newItems };
    });
  }

  getFilteredItems() {
    const { items, filter } = this.state;
    const formattedFilter = filter.toLowerCase();
    const match = (el) => el.includes(formattedFilter);

    const filteredItems = items.filter(item => {
      return Object.values(item).some(value => {
        let result = false;
        if (!result && Array.isArray(value)) {
          result = value.some(el => match(el.toLowerCase()));
        }
        if (!result && typeof value === 'number') {
          result = match(`${value}`);
        }
        if (!result && typeof value === 'string') {
          result = match(value.toLowerCase());
        }
        return result;
      })
    });

    return filteredItems;
  }

  render() {
    const { filter } = this.state;
    const filteredItems = this.getFilteredItems();

    return (
      <div>
        <SearchBar
          searchValue={filter}
          handleChange={this.handleFilterChange}
        />
        <TableList 
          items={filteredItems}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default TableListContainer;
