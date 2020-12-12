import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import phone from './pages/phone'
import NavBar from "./pages/navBar"
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css'
import PrivateRoute from './privateroute'
import adminPage from './pages/adminPage'
import Electromenager from './pages/Electromenager'
import Refregirateur from './pages/Refregirateur'
import Machine from './pages/Machine'
import Pc from './pages/Pc'


function App() {
  return (
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Login" component={Login}/>
       <Route path="/phone" component={phone}/>
       <Route path="/electromenager" component={Electromenager}/>
       <Route path='/Refregirateur' component={Refregirateur}/>
       <Route path='/Machine' component={Machine}/>
       <Route path="/pc" component={Pc}/>
       <PrivateRoute path="/adminPage" component={adminPage}/>
     </Switch>
     </Router>
  );
}

export default App;
