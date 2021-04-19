import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../img/order.svg'
import testi from '../../../img/testimonials.svg'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { userContext } from '../../../App';

const Sidebar = () => {
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    let [allAdmin,setAllAdmin]=useState([])
    useEffect(()=>{
    fetch('https://guarded-fjord-04672.herokuapp.com/checkadmin')
    .then(res=>res.json())
    .then(admin=>setAllAdmin(admin))
    },[])
    let isAdmin=  allAdmin.find(admin=>admin.email==loggedInUser.email)

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
             {
                 isAdmin ?<>
                 <li>
                 <Link to="/" className="">
                     <FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span> 
                 </Link>
             </li>
             <li>
                    <Link to="/addservices" className="">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Add Services</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Make Admin</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/bookings" className="">
                        <FontAwesomeIcon icon={faUsers} /> <span>Bookings </span>
                    </Link>
                </li>

                <li>
                    <Link to="/myorders" className="">
                        {/* <FontAwesomeIcon icon={faUsers} />  */}
                        <img style={{height:'20px'}}  src={cart} alt=""/>
                        <span className="ms-3">My Booking </span>
                    </Link>
                </li>

                <li>
                    <Link to="/review" className="">
                        {/* <FontAwesomeIcon icon={faUsers} />  */}
                        <img style={{height:'20px'}}  src={testi} alt=""/>
                        <span className="ms-3">Review </span>
                    </Link>
                </li>
                  </>  :<>
                  <li>
                 <Link to="/" className="">
                     <FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span> 
                 </Link>
             </li>
                  
                  <li>
                    <Link to="/review" className="">
                        {/* <FontAwesomeIcon icon={faUsers} />  */}
                        <img style={{height:'20px'}}  src={testi} alt=""/>
                        <span className="ms-3">Review </span>
                    </Link>
                </li>
                <li>
                    <Link to="/myorders" className="">
                        {/* <FontAwesomeIcon icon={faUsers} />  */}
                        <img style={{height:'20px'}}  src={cart} alt=""/>
                        <span className="ms-3">My Booking </span>
                    </Link>
                </li>
                  
                  
                  
                  </>
             }

               
                
              
               
               
             
                
              
            </ul>
            <div>
                <Link to="/" className=""><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;