import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';


class SearchBar extends Component {
  render() {
    const { searchValue, handleChange } = this.props;

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
