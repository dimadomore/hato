import React from 'react';
import PropTypes from 'prop-types';
import './TableListItem.scss';


function TableListItem({ id, name, email, phoneNumber, dateBirth, languages}) {
  return (
    <tr className="table-list-item">
      <td>
        {id}
      </td>
      <td>
        {name}
      </td>
      <td>
        {email}
      </td>
      <td>
        {phoneNumber}
      </td>
      <td>
        {dateBirth}
      </td>
      <td>
        {languages.map((language, i) => i === (languages.length - 1) ? language : `${language}, `)}
      </td>
      <td className="control-delete">
        Delete
      </td>
    </tr>
  );
}

TableListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  dateBirth: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
}

TableListItem.defaultProps = {
  id: 0,
  name: '',
  email: '',
  phoneNumber: '',
  dateBirth: '',
  languages: [],
}

export default TableListItem;
