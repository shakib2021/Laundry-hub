import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';

import './Contact.css';
const Contact = () => {
    let [loggedInUser,setLoggedInUser]=useContext(userContext)
    return (
        <div className="row cont">
            <h3 className="text-center">Contact Us</h3>
            <div className="col-md-5  contact-img">
          
            </div>
            <div className="col-md-7  contact-in">
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control contact-inp" defaultValue={loggedInUser.displayName} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control contact-inp" defaultValue={loggedInUser.email} id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control contact-inp" id="exampleFormControlTextarea1" rows="3"></textarea><br/>
  <button className="btn btn-success">Submit</button>
</div>
            </div>
        </div>
    );
};

export default Contact;