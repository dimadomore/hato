import React, { Component } from 'react';
import './TableHeader.scss';


class TableHeader extends Component {

  render() {
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
        <th>

        </th>
      </tr>
    );
  }
}

export default TableHeader;
