import React from 'react';
import '../Myorders/Myorders.css'
const OrderCard = (props) => {
    let {title,price,email,image,descrip,status}=props.order
    return (
       
        <div className="orderCard r">
          <div className="card-body">
              <div className="card-order-img">
              <img   src={image} alt=""/>
              </div>
     <h6 className="text-center mt-3">{title}</h6>
     <p className="tex">
{descrip}
     </p>
     <button className="btn btn-outline-success pr ">{price}$ </button>
     <button className="btn btn-outline-success st " >{status} </button>
          </div>
        </div>
       
    );
};

export default OrderCard;