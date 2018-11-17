import React, { Component } from 'react';
import './PageView.css';

import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import MainContent from '../MainContent/MainContent';

class PageView extends Component {
  render() {
    return (
      <div className="page-view">
        <TopBar />
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default PageView;
