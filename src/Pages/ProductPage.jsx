import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Filter from '../Components/Filter'
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { useEffect } from 'react';
import { STATUS, fetchProducts } from '../Store/Slice/productSlice';

const ProductPage = () => {
  const dispatch=useDispatch();
   
  useEffect(()=>{
        dispatch(fetchProducts())
  },[])
  const {status}=useSelector((state)=>state.productSlice);
  console.log("this is status",status);
  return (
    <div >
       
        {
          (status===STATUS.LOADING)?(<div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}className='spinner'><SpinnerCircular size="300"/></div>):(
            <div>
                <Filter/>
  <Products/>
  
              </div>
          )
        }
       
    </div>
  )
}

export default ProductPage