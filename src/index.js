import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import DashboardPage from './components/Pages/DashboardPage/DashboardPage';
import ListPage from './components/Pages/ListPage/ListPage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Router>
      <App>
        <Switch>
          <Route path="/home" component={DashboardPage} />
          <Route path="/list" component={ListPage} />
        </Switch>
      </App>
    </Router>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
