import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.scss';


function TableHeader({ sort }) {
  return (
    <tr className="table-header">
      <th onClick={() => sort('id')}>
        ID
      </th>
      <th onClick={() => sort('name')}>
        Name
      </th>
      <th onClick={() => sort('email')}>
        Email
      </th>
      <th onClick={() => sort('phoneNumber')}>
        Phone Number
      </th>
      <th onClick={() => sort('dateBirth')}>
        Date of birth
      </th>
      <th onClick={() => sort('languages')}>
        Languages
      </th>
      <th />
    </tr>
  );
}

TableHeader.propTypes = {
  sort: PropTypes.func,
}

TableHeader.defaultProps = {
  sort: () => {},
}

export default TableHeader;
