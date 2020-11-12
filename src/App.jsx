import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { PublicRoute, PrivateRoute, AuthRoute } from './routes';
import './App.css';
import { Home, Login, NoMatch } from './pages';
import ErrorBoundary from './libs/utils/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <PublicRoute exact path='/home' component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            {/* <PrivateRoute path="/list" component={LIST} />*/}
            <PrivateRoute component={NoMatch} />
          </Switch>
        </Router >
      </ErrorBoundary>
    </div >
  );
}

export default App;
