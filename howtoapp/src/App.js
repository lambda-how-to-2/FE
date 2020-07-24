import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile/Profile'
import Home from './components/Home/home'
import LoggedInNav from './components/navigation/LoggedInNav'
import Navigation from './components/navigation/Navigation';
import Error404 from './components/Error404'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(true)
  const [searchBox, setSearchBox] = React.useState(true)
  const [users, setUsers] = React.useState([]);
  const isLoggedIn = loggedIn ? <Navigation /> : <LoggedInNav />


  return (
    <>
      {isLoggedIn}
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} users={users} setUsers={setUsers}/>
        <Route path='/login' component={Login} users={users}/>
        <Route path='/' exact component={Home} />
        <Route path='*' exact component={Error404} />
      </Switch>
    </>

  );
}

export default App;
