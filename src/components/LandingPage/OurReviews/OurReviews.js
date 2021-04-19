import React, { useEffect, useState } from 'react';
import ReviewCard from '../../DashBoard/Review/ReviewCard';
import './OurReviews.css'

const OurReviews = () => {
    let [allReviews,setAllReviews]=useState([])
    useEffect(()=>{
   fetch('https://guarded-fjord-04672.herokuapp.com/showReviews')
   .then(res=>res.json())
   .then(data=>setAllReviews(data))



    })


    return (
              <div className="row rev">
         <div className="col-lg-10 col-sm-6 c col-md-10 mb-5 mt-5">
             <h1 className="text-center t cl">CLIENT REVIEWS</h1>
      {allReviews.map(review =><ReviewCard review={review}></ReviewCard>)}
  
      </div>
              </div>
     
        
    );
};

export default OurReviews;































