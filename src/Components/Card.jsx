import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store/Slice/productSlice'
import { Link } from 'react-router-dom';
const Card = ({curProduct}) => {
  const dispatch=useDispatch();
  // const {cart}=useSelector(state=>state.productSlice);
// adding to cart
  const add=()=>{
     dispatch(addToCart(curProduct));
  }
  // console.log("this is cart",cart)
  // adding to cart
  return (
    <div className='card'>
        <div className="image">
        <Link to={`/singleproduct/${curProduct.id}`}><img src={curProduct.images[0]}/></Link> 
        </div>
        <div className="info">
             <h3><i>{curProduct.title}</i></h3> 
             <p>{curProduct.description.slice(0,50)}</p>
             <h3>${curProduct.price}</h3>
             <button onClick={()=>{add()}}>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card