import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/navigation/Navigation';

function App() {
  const [searchBox, setSearchBox] = React.useState(true)
  const [users, setUsers] = React.useState([]);

  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/register' component={Register} users={users} setUsers={setUsers}/>
        <Route path='/login' component={Login} users={users}/>
      </Switch>
    </div>

  );
}

export default App;
