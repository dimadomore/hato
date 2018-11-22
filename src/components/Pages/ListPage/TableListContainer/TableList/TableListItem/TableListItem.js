import React from 'react';
import PropTypes from 'prop-types';
import './TableListItem.scss';


function TableListItem({ id, name, email, phoneNumber, dateBirth, languages, deleteItem }) {
  const formattedId = (`000${id}`).slice(-4);

  return (
    <tr className="table-list-item">
      <td>
        {formattedId}
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
      <td 
        className="control-delete"
        onClick={() => deleteItem(id)}
      >
        <span>Delete</span>
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
  deleteItem: PropTypes.func,
}

TableListItem.defaultProps = {
  id: 0,
  name: '',
  email: '',
  phoneNumber: '',
  dateBirth: '',
  languages: [],
  deleteItem: () => {},
}

export default TableListItem;
