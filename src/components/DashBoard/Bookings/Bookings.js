import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
// import Header from '../../LandingPage/Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Bookings.css'

const Bookings = () => {
    const { handleSubmit ,register} = useForm();

    let {id}=useParams();

    let [Data,setData]=useState([])
    console.log(Data)
        useEffect(()=>{
    
            fetch('https://guarded-fjord-04672.herokuapp.com/servicedata')
            .then(res=>res.json())
            .then(data=>{
                setData(data)
            })
    
        },[])
          let order=  Data.find(data=>data._id==id) 
           let orderData=order
      let {title,price,img,description}=orderData ||{}
    
     ///////////// userInfo/////////////////////
    let [loggedInUser,setLoggedInUser]=useContext(userContext);
    let email=loggedInUser.email;
    let name=loggedInUser.displayName;
    // ///////////useForm////////////////////
    ///////order data/////////////
let [orderInfo,setOrderInfo]=useState(null)
    ////////////onSubmit//////
console.log(orderInfo)
    const onSubmit =(data)=>{
        let info={
            displayName:data.name,
            email:data.email,
            title:title,
            price:price,
            image:img,
            descrip:description,
            status:"Pending"
}
setOrderInfo(info)
      }
    ////////////onsubmit End////////
      let handlePaymentSuccess =paymentId=>{
let orderInfoDetails={...orderInfo,paymentId}
       

fetch('https://guarded-fjord-04672.herokuapp.com/saveorders',{
    method: 'POST',
   headers: {'content-type': 'application/json'},
   body: JSON.stringify(orderInfoDetails)
     

})
console.log(orderInfoDetails)
      }
document.title="Book Now | Laundry-Hub"

     
    return (
        <div className="row">
            <div className="col-md-2  ">
                <Sidebar></Sidebar>
            </div>

            <div style={{display:orderInfo ? 'none':'block'}}   className="col-md-6 ms-5">
                <h4 className="text-lg-center mt-3 text-danger"> Laundry Bookings</h4>

               
                <form className="fo"onSubmit={handleSubmit(onSubmit)}>
     
     <input  required defaultValue={loggedInUser.displayName} className="inp" type='text' {...register('name')} /> <br></br>
     <input  required defaultValue={loggedInUser.email} className="inp" {...register('email')}  type="email"/> <br></br>

      <textarea  className='t mb-5'  placeholder={title} id=""  cols="40" rows="5"></textarea><br></br>
   <input className="inp mt-5" type="submit" />
   </form>
   <p className="mt-3"> This Service May Charge {price}$ </p>

            </div>
            <div style={{display:orderInfo ? 'block':'none' }} className="col-md-4  pay">
<ProcessPayment handlePaymentSuccess={handlePaymentSuccess} ></ProcessPayment>
            </div>
        </div>
    );
};

export default Bookings;