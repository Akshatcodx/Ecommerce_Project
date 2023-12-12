import React, { useState } from 'react';
// import {AiFillStar} from "react-icons/";
import {FaStar,FaStarHalfAlt,FaRegStar} from "react-icons/fa";
const Star = ({stars}) => {
    let rating=stars;
    rating=rating.toFixed(1);
    console.log(rating);
   const ratingStars= Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
        if(rating>=index+1)
        {
            return < FaStar/>                 
        }  
        else if(rating>=number){

            return <FaStarHalfAlt/>
        }
        else{
            return <FaRegStar/>
        }

    })
  return (
    <div>
        
        Rating:
        {ratingStars}
   </div>
  )
}

export default Star