import React, { Component } from 'react';

import './PageView.scss';

import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import MainContent from '../MainContent/MainContent';

class PageView extends Component {
  render() {
    return (
      <div className="page-view">
        <TopBar />
        <SideBar />
        <MainContent>
          {this.props.children}
        </MainContent>
      </div>
    );
  }
}

export default PageView;
