import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/Slice/productSlice';
import Card from './Card';
import axios from 'axios';
import useDebounce from './useDebounce';
const Products = () => {
    const {products,category,search,status}=useSelector((state)=>state.productSlice);

    const {debouncedValue}=useDebounce(search);

    // 
    // useEffect(()=>{
        //   handleS();
    // },[search])
    const [page,setPage]=useState(1);
   
   
    let filteredProducts;   
    // pagination
    const itemsPerPage=(products.length/10);
    let rows=products.slice(page*itemsPerPage-itemsPerPage,page*itemsPerPage);
      
    // pagination

    // handlePagination
    const handlePagination=(p)=>{
        if(p>=1 && p<=((products.length/itemsPerPage))){
            setPage(p)           
          }  
    }
    // handlePagination

    // category filter
    if(category!=="all")
    {
         filteredProducts=products.filter((elem)=>{
            return elem.category===category;
        
    })
    rows=filteredProducts;
    }
    
    //  search filter
     if(search!=="")
      {
       let ItemToSearch=search.toLowerCase().split(" ").join("");
       const temp=rows.filter(({title})=>{  
       let idleTitle=title.split(" ").join("");   
       return (idleTitle.toLowerCase().includes(ItemToSearch));
            }
     )
         filteredProducts=temp;
          console.log("item to show",temp); 
       rows=temp;
     }
    //   search filter  
    
   
   
   


//  debounce inplementation

   
    // if(debouncedValue!=="")
    // {
        //  axios(`https://dummyjson.com/products/search?q=${debouncedValue}`).then((res)=>{
            // filteredProducts=res.data;
    //  rows=res.data  
        //  });    

    // }
    // console.log("searched Products",searchedProducts.data);
    // const handleS=async()=>{
        // if(search!=="")
        // {
        //  let ItemToSearch=search.toLowerCase().split(" ").join("");
        //  let temp=await axios.get(`https://dummyjson.com/products/search?q=${ItemToSearch}`);
        //  filteredProducts=temp.data.products;
        // 
        //   rows=temp.data.products;
        //   console.log(rows,"these are rows")
    //    
    //    }
    //    
    //    
    //    
    // }
    
  

  
  


// debounce inplementation
  return (
    <div className='products'>
        <div className="productsWrapper">
        {   console.log("these are actual",rows)}
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

        {(rows.length>5)?(
        <div className="pagination">
            {/* previous */}
           
                <span className='previous' onClick={()=>{handlePagination(page-1)}}>⬅️</span>
                {/* previous */}
           

          {/* pagination counter */}
                {
                    Array.from({length:(products.length)/itemsPerPage},(_,idx)=>{
                        return <span id= {(idx+1==page)?"clicked":"nclicked"}  
                        onClick={()=>{handlePagination(idx+1)}} className='paginationCounter'>
                            {idx+1}</span>

                    })
                }
                {/* pagination counter */}
           

            {/* next */}
             <span className='next' onClick={()=>{handlePagination(page+1)}}>➡️</span>
             {/* next */}
               
        </div>

    
    ):
    ""
    }

    
    </div>
  )
}

export default Products