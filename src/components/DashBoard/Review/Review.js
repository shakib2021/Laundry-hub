import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
// import { userContext } from '../../../App';


const Review = () => {
    const { handleSubmit ,register} = useForm();
    let [loggedInUser,setLoggedInUser]=useContext(userContext);
    console.log(loggedInUser);
    const onSubmit =(data)=>{

        let reviews={
          name:data.name,
          company:data.company,
          description:data.description,
          image:loggedInUser.photoURL
         
        }
    
        fetch("http://localhost:5000/addReview",{
    
       method:'POST',
       headers:{'content-type':'application/json'},
          body:JSON.stringify(reviews)
       })
       console.log(reviews)
      
      }
      document.title="Your Reviews | Laundry-Hub"

    return (
        <div className='row'>
           <div className="col-lg-2 col-sm-6 col-md-2 si">
<Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-sm-6 col-md-10 mb-5">

            <form className="fo"onSubmit={handleSubmit(onSubmit)}>
      <h3 className="revi mt-3">Review</h3>
     <input  required placeholder="Your Name" defaultValue={loggedInUser.displayName} className="inp" type='text' {...register("name")} /> <br></br>
     <input  required placeholder="Company Name Designation" className="inp" {...register("company")}  type="text"/> <br></br>
      <textarea required className='t' placeholder="Description" {...register("description")} id="" cols="50" rows="10"></textarea><br></br>
      
   <input className="inp" type="submit" />
   </form>





                </div>
        </div>
    );
};

export default Review;