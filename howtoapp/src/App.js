import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [searchBox, setSearchBox] = React.useState(true)

  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>

  );
}

export default App;
