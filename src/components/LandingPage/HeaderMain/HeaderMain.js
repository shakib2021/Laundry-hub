import React from 'react';
import './HeaderMain.css'
import loundryCover from '../../../img/louandryCover.jpg'
const HeaderMain = () => {
    return (
        <section className="row Container headerMain ">
            
            <div className="col-md-5">
              <img  className="img-fluid cover" src={loundryCover} alt=""/>
            </div>
            <div className="col-md-7 Wel">
<h1  className="text-center "> Welcome To  Laundry Hub</h1>
<p className="wel-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Doloremque natus veniam modi assumenda ratione, placeat labore!</p>
     <button  className="btn btn-primary g">Get An Appointment</button>
            </div>




        </section>
    );
};

export default HeaderMain;