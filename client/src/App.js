import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Jokes from './routes/Jokes';
import Login from './routes/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          {localStorage.getItem('token') ? <Redirect to="/" /> : <Login />}
        </Route>
        <PrivateRoute path="/">
          <Jokes />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
