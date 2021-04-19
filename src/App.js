import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddServices from "./components/DashBoard/AddServices/AddServices";
import Admin from "./components/DashBoard/Admin/Admin";
import Bookings from "./components/DashBoard/Bookings/Bookings";
import Dashboard from "./components/DashBoard/Dashboard/Dashboard";
import Myorders from "./components/DashBoard/Myorders/Myorders";
import OrderList from "./components/DashBoard/OrderList/OrderList";
import Review from "./components/DashBoard/Review/Review";
import Home from "./components/LandingPage/Home/Home";
import OurReviews from "./components/LandingPage/OurReviews/OurReviews";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute"
export let userContext =createContext()
function App() {
  let [loggedInUser,setLoggedInUser]=useState({})
  console.log(loggedInUser.email)
 let [allAdmin,setAllAdmin]=useState([])
  useEffect(()=>{
  fetch('http://localhost:5000/checkadmin')
  .then(res=>res.json())
  .then(admin=>setAllAdmin(admin))
  },[])
  let isAdmin=  allAdmin.find(admin=>admin.email==loggedInUser.email)
   console.log(isAdmin)
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
     <Switch>
       {isAdmin ? <>
        <PrivateRoute path="/addservices" >
         <AddServices></AddServices>
       </PrivateRoute>
       <PrivateRoute  path="/orderList">
<OrderList></OrderList>
       </PrivateRoute>
       <Route exact path='/'>
<Home></Home>
      </Route>
      <Route  path='/login'>
        <Login></Login>
       </Route>
       <PrivateRoute  path='/dashboard'>
        <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute path='/bookings/:id'>
         <Bookings></Bookings>
       </PrivateRoute>
       <PrivateRoute  path="/myorders">
<Myorders></Myorders>
       </PrivateRoute>
       <PrivateRoute  path="/review">
<Review></Review>
       </PrivateRoute>
       <PrivateRoute  path="/admin">
<Admin></Admin>
       </PrivateRoute>
       </>:<>
       <Route exact path='/'>
<Home></Home>
      </Route>
      <Route  path='/login'>
        <Login></Login>
       </Route>
       <PrivateRoute  path='/dashboard'>
        <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute path='/bookings/:id'>
         <Bookings></Bookings>
       </PrivateRoute>
       <PrivateRoute  path="/myorders">
<Myorders></Myorders>
       </PrivateRoute>
       <PrivateRoute  path="/review">
<Review></Review>
       </PrivateRoute>
       
       </>
       
      }
      
      
      
      
     
     
       
      
      
     
     </Switch>
   </Router>


   </userContext.Provider>


  );
}

export default App;
