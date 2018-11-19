import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
     <Route path="/" exact component={App} />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
