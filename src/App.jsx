import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { PublicRoute, PrivateRoute, AuthRoute } from './routes';
import './App.css';
import { Home, Login, NoMatch } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <PublicRoute exact path='/home' component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          {/* <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute exact path="/textfield-demo" component={TextFieldDemo} />
          <PrivateRoute exact path="/input-demo" component={InputDemo} />
          <PrivateRoute exact path="/children-demo" component={ChildrenDemo} /> */}
          <PrivateRoute component={NoMatch} />
        </Switch>
      </Router >
    </div >
  );
}

export default App;
