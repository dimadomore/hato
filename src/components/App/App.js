import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import MainContent from '../MainContent/MainContent';

import './App.scss';


function App({ children }) {
  return (
    <div className="app">
      <TopBar />
      <SideBar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
}

App.defaultProps = {
  children: null,
}

export default App;
