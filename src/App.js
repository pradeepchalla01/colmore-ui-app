import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Landing from '../src/components/landing/index';
import Search from '../src/components/search/index';
import store from '../src/redux/store';

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/details">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
