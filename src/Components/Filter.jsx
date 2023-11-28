import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { setCategory } from '../Store/Slice/productSlice';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
const Filter = () => {
    const dispatch=useDispatch();
    // filter
    const filterCategory=(category)=>{
        dispatch(setCategory(category))
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 3
      };
    const {products}=useSelector((state)=>state.productSlice);
    
    const tempCategories=products.map((curElem)=>{
        return curElem.category;
    });
    const categories=["all",...new Set(tempCategories)]

    console.log(categories)
  return (
    <div className='filterContainer'>
        {/* <div className="filterWrapper"> */}
          <Slider {...settings}>
            {
                categories.map((curCategory)=>{
                    return <p className='category' onClick={()=>{filterCategory(curCategory)}}>{curCategory}</p>

                })
            }
            </Slider>
            
        </div>

    // </div>
  )
}

export default Filter