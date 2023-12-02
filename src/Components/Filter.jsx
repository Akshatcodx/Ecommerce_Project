import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Slider from 'react-slick';
import 'react-multi-carousel/lib/styles.css';
import { setCategory } from '../Store/Slice/productSlice';
const Filter = () => {
    const dispatch=useDispatch();
    // filter
    const filterCategory=(category)=>{
        dispatch(setCategory(category))
    }
    const {products,category}=useSelector((state)=>state.productSlice);
    
    const tempCategories=products.map((curElem)=>{
        return curElem.category;
    });
    const categories=["all",...new Set(tempCategories)]

    console.log(categories)
  return (
    <div className='filterContainer'>
        <div className="filterWrapper">
         
            {
                categories.map((curCategory)=>{
                    return (
                      
                        <p id={(curCategory===category)?"filterClicked":""} className='category' onClick={()=>{filterCategory(curCategory)}}>{curCategory}</p>
                      
                    )

                })
            } 
           
          
            
        </div>

     </div>
  )
}

export default Filter