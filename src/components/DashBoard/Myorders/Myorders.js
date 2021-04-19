import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Myorders.css'
import OrderCard from './OrderCard';
const Myorders = () => {

let [myorders,setMyorders]=useState([])
let [loggedInUser,setLoggedInUser]=useContext(userContext);

let k=myorders.filter(ord=>ord.email==loggedInUser.email)
  
useEffect(()=>{

    fetch('https://guarded-fjord-04672.herokuapp.com/showorder')
    .then(res=>res.json())
    .then(data=>setMyorders(data))
},[])
      
document.title="Your Orders | Laundry-Hub"

 return (
        <div className="row " style={{overflow:'hidden'}}>
            <div className="col-lg-2 col-sm-6 col-md-2 si">
<Sidebar></Sidebar>
            </div>
             <div className="col-lg-10 col-sm-6 col-md-10 mb-5">
               
              {k.map(order=><OrderCard order={order}></OrderCard> )}
                  
               </div>
               
               </div>
    );
};

export default Myorders;