import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import DashboardPage from './components/Pages/DashboardPage/DashboardPage';
import ListPage from './components/Pages/ListPage/ListPage';
import AddUser from './components/AddUser/AddUser';

import localStorage from './localStorageHandler';

import * as serviceWorker from './serviceWorker';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.get('users') && localStorage.get('users').length
      ? <Component {...props} />
      : <Redirect to='/add-user' />
  )} />
)

ReactDOM.render(
  <Router>
    <Router>
      <Switch>
        <Route path="/add-user" component={AddUser} />
        <App>
          <Switch>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/list" component={ListPage} />
            <Redirect from='/' to='/dashboard' />
          </Switch>
        </App>
      </Switch>
    </Router>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
