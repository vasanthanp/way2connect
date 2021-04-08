import {Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login/Login.jsx'
import SignUp from './components/auth/signup/SignUp.jsx'
const routes =   (
      <Switch>
       <Route path="/login"><Login/></Route>
       <Route path="/signup"> <SignUp/></Route>
      </Switch> 
      
)
export default routes
