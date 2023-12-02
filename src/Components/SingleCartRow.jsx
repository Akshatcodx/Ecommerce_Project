import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../Store/Slice/productSlice';
const SingleCartRow = ({cartItem}) => {
  const dispatch=useDispatch();
  return (
   <tr>
     <td>
      <div className="item">
        <img src={cartItem.images[0]}/>
        <div className="itemInfo">
        <p>{cartItem.title}</p>
        <p>{cartItem.category}</p>

        </div>
      </div>
     </td>
     <td>{cartItem.price}</td>
     <td>
     <div className="quantity">
      <span  onClick={()=>{dispatch(decreaseQuantity(cartItem))}}>➖</span>
      <p>{cartItem.quantity}</p>

      <span onClick={()=>{dispatch(increaseQuantity(cartItem))}}>➕</span>

     </div>
      </td>
     <td><button>Remove from cart</button></td>

   </tr>
  )
}

export default SingleCartRow