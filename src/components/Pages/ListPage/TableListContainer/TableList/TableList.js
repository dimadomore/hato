import React from 'react';
import PropTypes from 'prop-types';

import TableListItem from './TableListItem/TableListItem';
import TableHeader from './TableHeader/TableHeader';

import './TableList.scss';


function TableList({ items, deleteItem, sort }) {
  if (items.length === 0) {
    return <div className="no-found">No users found</div>;
  }
  
  return (
    <div className="table-list">
      <table>
        <tbody>
          <TableHeader sort={sort} />
          {items.map((item, index) => (
            <TableListItem 
              key={`${item.name}${item.email}`}
              id={index + 1}
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


TableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
      dateBirth: PropTypes.string,
      languages: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  deleteItem: PropTypes.func,
  sort: PropTypes.func,
}

TableList.defaultProps = {
  items: [],
  deleteItem: () => {},
  sort: () => {},
}


export default TableList;
