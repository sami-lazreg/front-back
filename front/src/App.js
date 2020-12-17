import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import NavBar from "./pages/navBar"
import{BrowserRouter, BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import './App.css'
import PrivateRoute from './privateroute'
import PrivateRoute2 from './privetRoute2'
import adminPage from './pages/adminPage'
import ProductRoute from './pages/products/productRoute'
import panier from './pages/panier'
import {useSelector} from 'react-redux'



function App() {
  const auth=useSelector(state=>state.authReducer)
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <ProductRoute/>
      
       <Route exact path="/" component={Home}/>
       <Route path="/Register"  render={props=>
                    !auth.role? <Register {...props}/>:<Redirect to='/'/>}/>
       <Route path="/Login" render={props=>
                    !auth.role? <Login {...props}/>:<Redirect to='/'/>}/>
       <PrivateRoute path="/adminPage" component={adminPage}/>
       <PrivateRoute2 path="/panier" component={panier}/>
       </BrowserRouter>
       </div>
    
  );
}

export default App;
