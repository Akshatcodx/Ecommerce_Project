import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Star from '../Components/Star';
const SingleProduct = () => {
    const {productId}=useParams();
    const {products}=useSelector((state)=>state.productSlice);
    const {images,title,description,thumbnail,stock,price,rating,brand,category}=products.find((elem)=>{
        return elem.id==productId;
    })
    const [selectedImage,setSelectedimage]=useState(thumbnail);
  return (
    <div className="singleProductPage">
    <div className='singleProduct'>
        <div className="image" style={{display:"flex",gap:"30px"}}>
            <div className="multipleImages" >
                {
                    images.map((img,index)=>{
                        return < img src={img} style={{width:"14rem"}} onMouseEnter={()=>{setSelectedimage(img)}}></img>
                    })
                }
            </div>
            <div className="singleImage">
                <img style={{width:"50rem"}}src={selectedImage}></img>
            </div>
        </div>
        <div className="info">
            <h3><i>ProductName:{title}</i></h3>
            <h3><i>{description}</i></h3>
            <h3><i>price:${price}</i></h3>
            <h3><i>Brand:{brand}</i></h3>
            <h3><i>Category:{category}</i></h3>
            <h3><i>Stock:{stock}</i></h3>
            <Star stars={rating}/>
        </div>
    </div>
    </div>
  )
}

export default SingleProduct;