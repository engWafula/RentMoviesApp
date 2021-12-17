import Movies from  "./componets/Movies";
import './App.css';
import { useEffect } from "react";
import {Route,Redirect,Switch} from "react-router-dom"
import NotFound from "./componets/NotFound";
import Customers from   "./componets/Customers";
import Rentals from "./componets/Rentals";
import NavBar from "./componets/NavBar";
import MoviesForm from  "./componets/movieForm";
import LoginForm from "./componets/loginForm"
import Register from "./componets/register";
import axios from  "axios";
function App() {

  const endPoint= "https://jsonplaceholder.typicode.com/users/1/posts"
  const response= async ()=>{
    const promise= await axios.get(endPoint)
    console.log(promise)
  }
  useEffect(() => {
   
   response()
  },)
  return (
    <div>
  
   <NavBar /> 
     <main className="container">
   
    <Switch>
    <Route path="/Movies/:id" component={MoviesForm}></Route>
    <Route path="/Movies" component={Movies}></Route>
    <Route path="/loginForm" component={LoginForm}></Route>
    <Route path="/Customers" component={Customers}></Route>
    <Route path="/NotFound" component={NotFound}></Route>
    <Route path="/register" component={Register} />
    <Route path="/Rentals" component={Rentals}></Route>
    <Redirect from="/" exact to="/Movies" />
    <Redirect  to="/NotFound" />
    </Switch>
    </main> 

    </div>
  )
}

export default App;
