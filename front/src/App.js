import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import NavBar from "./pages/navBar"
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Router>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Login" component={Login}/>
     </Switch>
     </Router>
  );
}

export default App;
