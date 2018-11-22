import React from 'react';
import './TableHeader.scss';


function TableHeader() {
  return (
    <tr className="table-header">
      <th>
        ID
      </th>
      <th>
        Name
      </th>
      <th>
        Email
      </th>
      <th>
        Phone Number
      </th>
      <th>
        Date of birth
      </th>
      <th>
        Languages
      </th>
      <th />
    </tr>
  );
}

export default TableHeader;
