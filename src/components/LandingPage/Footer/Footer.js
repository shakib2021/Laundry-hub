import React from 'react';
import './Footer.css'
import girl from '../../../img/fb.png'
const Footer = () => {
    return (
        <section className=" foote-container">
           
           <div className="row  foot">
                      
                      <div className="col-md-3 sp  ">
          <h5 className="ti ">Emergency Department</h5>

                      <ul className="j l">
                          <li><a  href="">Emergency  Care</a></li>
                          <li><a href="">Membership</a></li>
                          <li><a href="">Our Services</a></li>
                          <li><a href="">Discount</a></li>
                          <li><a  href=""> Contact us</a></li>
                      </ul>
                      </div>
          
                      <div className="col-md-3 sp   ">
          <h5 className="ti ">Services</h5>
          <ul className="j ">
                          <li><a  href="">Emergency Center Care</a></li>
                          <li><a href=""> CheckUp</a></li>
                          <li><a href="">Our Services</a></li>
                          <li><a href="">Date Of</a></li>
                          <li><a  href=""> Contact us</a></li>
                          <li><a href="">Our Services</a></li>
                          <li><a href="">Date Of</a></li>
                          <li><a  href=""> Contact us</a></li>
                      </ul>
                      </div>
                      <div className="col-md-3 sp ">
          <h5 className="ti ">Oral Checkout</h5>
          <ul className="j ">
                          <li><a  href="">Emergency Center Care</a></li>
                          <li><a href=""> CheckUp</a></li>
                          <li><a href="">Our Services</a></li>
                          <li><a href="">Date Of</a></li>
                          <li><a  href=""> Contact us</a></li>
                          <li><a href="">Our Services</a></li>
                          <li><a href="">Date Of</a></li>
                          <li><a  href=""> Contact us</a></li>
                      </ul>
                      </div>
                      <div className="col-md-3  sp ">
          <h5 className="ti ">Our Address</h5>
          <ul className="j ">
          <li><a  href="">Dhaka City MirPur</a></li><br/>
                <div> 
                </div><br/>
          
                <h5 className="text-primary">Call Now</h5>
                <button class="btn btn-success">+88690654</button>
                      </ul>

                      </div>
                   
          
                      </div>

                      <li className="text-center text-info mt-5"> <p>All Right's Are Reserved By @ Shakib</p> </li>
           
        </section>
    );
};

export default Footer;