import React, { useEffect, useState } from 'react';
import './OurServices.css';
import ServicesCard from './ServicesCard';

// import servicesData from './servicesDataPass/servicesData';
const OurServices = () => {
    let [Data,setData]=useState([])
console.log(Data)
    useEffect(()=>{

        fetch('http://localhost:5000/servicedata')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })

    },[])
    document.title="Home | Laundry-Hub"
    return (
        <div className="row">
            <h1 className="d text-info mt-5  mb-5">Our Best Laundry Services</h1>
            {Data.length==0 && <h3 className="text-center">No Services Found! Plz Load This Site Again</h3>}
            <div className="col-lg-10 c col-sm-6 col-md-10 mb-5 "> 
          {
Data.map(service=><ServicesCard service={service}></ServicesCard>  )
          }
    </div>


        </div>
    );
};

export default OurServices;