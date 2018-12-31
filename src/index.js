import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';

import './css/index.css';
import Main from './pages/Main';
import store from './store';
import NewTodo from './pages/NewTodo';
import EditTodo from './pages/EditTodo';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/new" component={NewTodo} />
        <Route path="/todos/:id" component={EditTodo} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
