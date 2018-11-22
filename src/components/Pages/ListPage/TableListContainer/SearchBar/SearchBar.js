import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';


function SearchBar({ searchValue, handleChange }) {
  return (
    <div className="searchbar">
      <input 
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
}

SearchBar.deaultProps = {
  searchValue: '',
  handleChange: () => {},
}


export default SearchBar;
