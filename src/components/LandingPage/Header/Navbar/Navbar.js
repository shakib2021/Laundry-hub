import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import logo from '../../../../img/laundry-logo-vector.jpg'
const Navbar = () => {
  let[loggedInUser,setLoggedInUser]=useContext(userContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid ">
          <a class="navbar-brand ms-5  "  href="#">
              <img className="logg" src={logo} alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-5 ">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" > <Link style={{textDecoration:'none', color:'gray'}} >Home</Link> </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link" href> <Link to="/dashboard" style={{textDecoration:'none', color:'gray'}}>Dashboard</Link> </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
{ loggedInUser.email ?<li class="nav-item ms-5">
                <a class="nav-link" > <Link to='/login' style={{textDecoration:'none', color:'gray'}} >Log Out</Link>  </a>
              </li>:
              <li class="nav-item ms-5">
                <a class="nav-link" > <Link to='/login' style={{textDecoration:'none', color:'gray'}} > Log In</Link>  </a>
              </li>
        }
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;