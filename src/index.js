import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import DashboardPage from './components/Pages/DashboardPage/DashboardPage';
import ListPage from './components/Pages/ListPage/ListPage';
import AddUser from './components/AddUser/AddUser';

import * as serviceWorker from './serviceWorker';

// if (items.length === 0) {
//   return <Redirect to='/add-user' />
// }

ReactDOM.render(
  <Router>
    <Router>
      <Switch>
        <Route path="/add-user" component={AddUser} />
        <App>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/home" component={DashboardPage} />
            <Route path="/list" component={ListPage} />
          </Switch>
        </App>
      </Switch>
    </Router>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
