import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/Slice/productSlice';
import Card from './Card';
const Products = () => {
    const {products}=useSelector((state)=>state.productSlice);
     console.log(products);
     const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
  return (
    <div className='products'>
        <div className="productsWrapper">
            {
                products.map((curProduct)=>{
                    return (
                        <div className="cardWrapper">
                            <Card key={curProduct.id} curProduct={curProduct}/>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Products