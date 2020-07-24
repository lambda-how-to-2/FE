import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import HowToList from './components/HowToList';

function App() {
  const [searchBox, setSearchBox] = React.useState(true)
  const [users, setUsers] = React.useState([]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path='/howtos' component={HowToList}/>
        <Route path='/register' component={Register} users={users} setUsers={setUsers}/>
        <Route path='/login' component={Login} users={users}/>
      </Switch>
    </div>

  );
}

export default App;
