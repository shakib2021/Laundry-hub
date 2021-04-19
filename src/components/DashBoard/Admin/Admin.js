import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Admin = () => {
const { handleSubmit ,register} = useForm();
 const onSubmit =(data)=>{

        let serve={ email:data.email }
        fetch("https://guarded-fjord-04672.herokuapp.com/addAdmin",{
         method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(serve)
          })
       console.log(serve)
      
      }
     document.title="Make Admin | Laundry-Hub"
    return (
        <div className="row">
            <div className="col-lg-2 col-sm-6 col-md-2 si">
   <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-sm-6 col-md-10 mb-5">
               
            <form className="fo"onSubmit={handleSubmit(onSubmit)}>
      <input  required placeholder="email" className="inp" type='email' {...register("email")} /> <br></br>
      <input className="inp" type="submit" />

             </form>
            </div>

            
        </div>
    );
};

export default Admin;