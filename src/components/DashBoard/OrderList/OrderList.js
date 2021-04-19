import React, { useEffect, useState } from 'react';
import OrderCard from '../Myorders/OrderCard';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css'
import OrderListTable from './OrderListTable';
const OrderList = () => {
    let [OrderData,setOrderData]=useState([])

useEffect(()=>{
 fetch('http://localhost:5000/showOrders')
 .then(res=>res.json())
 .then(data=>setOrderData(data))



},[])
console.log(OrderData)

    return (
        <div className="row">
            <div className="col-md-2 si">
           <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Service</th>
      <th scope="col">Pay With</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {OrderData.map(order=><OrderListTable order={order}></OrderListTable>)}
  </tbody>
</table>
            </div>
        </div>
    );
};

export default OrderList;