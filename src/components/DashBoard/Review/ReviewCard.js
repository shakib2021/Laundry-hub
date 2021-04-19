import React from 'react';
import './Review.css'
const ReviewCard = (props) => {
    let {name,company,image,description}=props.review;
    return ( <div className="ReviewCard r">
          <div className="card-body">
              <div className="card-Review-img d-flex">
             <img src={image} alt=""/>
     <h6 className="tex mt-3">{name}</h6>
        </div>
     <p className="texty">
         {company}
       </p>
<p className="des">{description}</p>
          </div>
        </div>
       
    );
};

export default ReviewCard;