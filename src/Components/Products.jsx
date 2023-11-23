import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/Slice/productSlice';
import Card from './Card';
const Products = () => {
    const [page,setPage]=useState(1);
    const {products}=useSelector((state)=>state.productSlice);
     console.log(page);
     const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[]);
    // pagination
    const itemsPerPage=(products.length/10);
    const rows=products.slice(page*itemsPerPage-itemsPerPage,page*itemsPerPage);
      
    // pagination

    // handlePagination
    const handlePagination=(p)=>{
        if(p>=1 && p<=((products.length/itemsPerPage))){
            setPage(p)           
          }  
    }
    // handlePagination
    
  return (
    <div className='products'>
        <div className="productsWrapper">
            {
                rows.map((curProduct)=>{
                    return (
                        <div className="cardWrapper">
                            <Card key={curProduct.id} curProduct={curProduct}/>
                        </div>
                    )
                })
            }
        </div>

        <div className="pagination">
            {/* previous */}
           
                <span className='previous' onClick={()=>{handlePagination(page-1)}}>⬅️</span>
                {/* previous */}
           

          {/* pagination counter */}
                {
                    Array.from({length:(products.length)/itemsPerPage},(_,idx)=>{
                        return <span id= {(idx+1==page)?"clicked":"nclicked"}  onClick={()=>{handlePagination(idx+1)}} className='paginationCounter'>{idx+1}</span>

                    })
                }
                {/* pagination counter */}
           

            {/* next */}
             <span className='next' onClick={()=>{handlePagination(page+1)}}>➡️</span>
             {/* next */}
               
        </div>

    </div>
  )
}

export default Products