import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import login from '../../../src/img/login.jpg';
import londry from '../../../src/img/laundry-logo-vector.jpg';
import goo from '../../../src/img/goo.png';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // 
    let[loggedInUser,setLoggedInUser]=useContext(userContext)
    //
    var provider = new firebase.auth.GoogleAuthProvider();
    let handleLogIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            let isSignIn=true
          let user = result.user;
        setLoggedInUser(user,isSignIn);
        history.replace(from);
          // ...
        }).catch((error) => {
      
        });
    }
    document.title="Log In | Laundry-Hub"
    return (
     <div className="row w-75">
         
           <div className="  col-md-5 ms-5 mt-5 col-sm-12">
              <img src={login} className="img-fluid f m-auto" alt=""/>
               </div> 

           <div className="col-md-6  col-sm-12">
                <div className="lon">
              <img className="loundry-logo  " src={londry} alt=""/>

                </div>
                <div className="log d-flex">
             <div style={{height:'100%', width:'20%'}}>
                  <img style={{height:'100%',objectFit:'contain', width:'100%'}} src={goo} alt=""/>
                  </div>   
                <div style={{height:'100%', width:'80%'}}>
                    
                 <button onClick={handleLogIn} className="btn btn-success k">Sign In</button>
                       
                     </div>
                </div>
            
            
              </div> 




        </div>
    );
};

export default Login;