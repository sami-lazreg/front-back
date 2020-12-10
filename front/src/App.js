import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import NavBar from "./pages/navBar"
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css'
import PrivateRoute from './privateroute'
import adminPage from './pages/adminPage'


function App() {
  return (
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Login" component={Login}/>
       <PrivateRoute path="/adminPage" component={adminPage}/>
     </Switch>
     </Router>
  );
}

export default App;
