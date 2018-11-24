import React, { Component } from 'react';
import parse from 'date-fns/parse';

import TableList from './TableList/TableList';
import SearchBar from './SearchBar/SearchBar';

import localStorage from '../../../../localStorageHandler';

import './TableListContainer.scss';


class TableListContainer extends Component {
  state = {
    filter: '',
    sortColumn: 0,
    items: localStorage.get('users'),
    sortBy: '',
    sortType: 'asc',
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  handleSorting = (name) => {
    const { items, sorted, sortType } = this.state;
    let asc, desc, newSortType;

    const sortedItems = items.sort((a, b) => {
      if (name === 'name' || name === 'email' || name === 'phoneNumber') {
        asc = ('' + a[name]).localeCompare(b[name]);
        desc = ('' + b[name]).localeCompare(a[name])
      }
      if (name === 'id') {
        asc = items.indexOf(a) - items.indexOf(b);
        desc = items.indexOf(b) - items.indexOf(a);
      }
      if (name === 'dateBirth') {
        asc =  parse(a[name], 'dd.MM.yyyy', new Date()) - parse(b[name], 'dd.MM.yyyy', new Date());
        desc =  parse(b[name], 'dd.MM.yyyy', new Date()) - parse(a[name], 'dd.MM.yyyy', new Date());
      }
      if (name === 'languages') {
        asc = a[name].length - b[name].length;
        desc = b[name].length - a[name].length
      }
      if (sorted === name && sortType === 'asc') {
        newSortType = 'desc';
        return desc;
      }
      newSortType = 'asc';
      return asc;
    })

    this.setState({
      items: sortedItems,
      sorted: name,
      sortType: newSortType,
    });
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
    if (!filter) {
      return items;
    }
    const formattedFilter = filter.toLowerCase();
    const match = (el) => el.includes(formattedFilter);

    const filteredItems = items.filter((item, index) => {
      return Object.values(item).some(value => {
        let result = false;

        if (!result && Array.isArray(value)) {
          result = value.some(el => match(el.toLowerCase()));
        }
        if (!result && typeof value === 'string') {
          result = match(value.toLowerCase());
        }
        if (!result) {
          const formattedId = (`000${index + 1}`).slice(-4);
          result = match(formattedId);
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
          sort={this.handleSorting}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default TableListContainer;
