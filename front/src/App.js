import Register from './pages/Register'
import Home from "./pages/Home"
import Login from './pages/Login'
import NavBar from "./pages/navBar"
import{BrowserRouter, BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css'
import PrivateRoute from './privateroute'
import adminPage from './pages/adminPage'
import ProductRoute from './pages/products/productRoute'
import panier from './pages/panier'



function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <ProductRoute/>
      <Route  path="/panier" component={panier}/>
       <Route exact path="/" component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Login" component={Login}/>
       <PrivateRoute path="/adminPage" component={adminPage}/>
       </BrowserRouter>
       </div>
    
  );
}

export default App;
