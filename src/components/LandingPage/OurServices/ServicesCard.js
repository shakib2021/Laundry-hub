import React from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'
const ServicesCard = (props) => {
    let {img,title,price,_id,description}=props.service;
    return (
        <div className="cart ">
        <div className="cart-img">
<img src={img} className="service-img" alt=""/>
        </div>
        <div className="cart-title">
           <h4 className="title-text">{title}</h4>
           <p className="title-tex">{description}</p>
        </div>
        <div className="cart-price d-flex">
        <div> <button className="btn btn-danger pr">{price}$</button></div> 
        <div> <button className="btn btn-success or"  ><Link className="lik" to={`/bookings/${_id}`} >Order Now</Link>
        </button>
        </div> 
        </div>
      </div>
    );
};

export default ServicesCard;