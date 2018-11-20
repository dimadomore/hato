import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableList.scss';

import TableListItem from './TableListItem/TableListItem';
import TableHeader from './TableHeader/TableHeader';

class TableList extends Component {

  render() {
    const { items, deleteItem } = this.props;

    return (
      <div className="table-list">
        <table>
          <tbody>
            <TableHeader />
            {items.map(item => (
              <TableListItem 
                key={item.id}
                deleteItem={deleteItem}
                {...item}
              />
            ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}


TableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
      dateBirth: PropTypes.string,
      languages: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  deleteItem: PropTypes.func,
}

TableList.defaultProps = {
  items: [],
  deleteItem: () => {},
}


export default TableList;
