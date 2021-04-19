import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddServices.css';
import axios from 'axios';

import { useForm } from "react-hook-form";
const AddServices = () => {
    const { handleSubmit ,register} = useForm();
  let [imageURL,setImageURL]=useState(null)
      
     const onSubmit =(data)=>{

    let serve={
      title:data.title,
      price:data.price,
      description:data.description,
      img:imageURL
    }

    fetch("http://localhost:5000/addservices",{

   method:'POST',
   headers:{'content-type':'application/json'},
      body:JSON.stringify(serve)
   })
   console.log(serve)
  
  }
 
 
 let handle=(event)=>{
    const imageData=new FormData()
    imageData.set('key','297c47d38fadb6e7e10ed36519c1a5e3')
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url)
       console.log(response.data.data.display_url)
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    return (
        <div className="row">
            <div className="col-md-2">
<Sidebar></Sidebar>
            </div>
            <div className="col-md-6 ">
              <h1 className="text-center mt-5 text-info">Add Services</h1>

              <form className="fo"onSubmit={handleSubmit(onSubmit)}>
     
      <input  required placeholder="Services Title" className="inp" type='text' {...register("title")} /> <br></br>
      <input  required placeholder="Price" className="inp" {...register("price")}  type="number"/> <br></br>
       <textarea required className='t' placeholder="Description" {...register("description")} id="" cols="50" rows="10"></textarea><br></br>
       <input  required  className="inp" onChange={handle} type="file"   /> <br></br>
    <input className="inp" type="submit" />
    </form>





            </div>
        </div>
    );
};

export default AddServices;