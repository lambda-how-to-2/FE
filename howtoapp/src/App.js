import React from "react"
import { Route, Switch } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Navigation from "./components/navigation/Navigation"
import PrivateRoute from "./components/PrivateRoute"
import HowToList from "./components/HowToList"
import Profile from "./components/Profile/Profile"
import Home from "./components/Home/home"
import EditHowTo from './components/EditHowTo';
import LoggedInNav from "./components/navigation/LoggedInNav"
import Error404 from "./components/Error404"
import Signup from "./components/Register"
function App() {
  const [searchBox, setSearchBox] = React.useState(true)
  const [users, setUsers] = React.useState([])
  const isLoggedIn = localStorage.getItem("token") ? (
    <LoggedInNav />
  ) : (
    <Navigation />
  )
  return (
    <div className='App'>
      <>
        {isLoggedIn}
        <Switch>
          <PrivateRoute exact path='/howtos' component={HowToList} />
          <Route
            path='/register'
            component={Register}
            users={users}
            setUsers={setUsers}
          />
          <Route path='/login' component={Login} users={users} />
          {/* <Route path='/profile' component={Profile} /> */}
          <PrivateRoute path='/profile' component={Profile} />
          <Route
            path='/register'
            component={Register}
            users={users}
            setUsers={setUsers}
          />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} users={users} />
          <Route path='/:id/edit' exact component={EditHowTo} />
          <Route path='/' exact component={Home} />
          <Route path='*' exact component={Error404} />
        </Switch>
      </>
    </div>
  )
}
export default App;