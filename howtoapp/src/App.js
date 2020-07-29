import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HowToList from './components/HowToList';
import './App.scss';
import Create from './components/how_to_dos/Create';

function App() {
  const [searchBox, setSearchBox] = React.useState(true)

  return (
    <div className="App">
      <div className='header'>
        <Link to="/register" className='hover-effect'>HowToDos</Link>
        <Link className='create-howtodo' to="/howtodos/new">Create How Todo</Link>
      </div>
      <Switch>
        <Route exact path='/howtodos/new' component={Create}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>

  );
}

export default App;
