import React from 'react'
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SignUp from './components/SignUp';
export default function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Redirect exact from="/" to="/login"/>
       <Route path="/login"><Login/></Route>
       <Route path="/signup"> <SignUp/></Route>
      </Switch> 
      
      </Router>
     
    </div>
  )
}
