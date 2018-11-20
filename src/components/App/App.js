import React, { Component } from 'react';
import './App.scss';


import PageView from '../PageView/PageView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageView>
          {this.props.children}
        </PageView>
      </div>
    );
  }
}

export default App;
