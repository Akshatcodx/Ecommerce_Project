import React from 'react'
const SingleCartRow = ({cartItem}) => {
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
      <button>-</button>
      <p>{cartItem.quantity}</p>

      <button>+</button>

     </div>
      </td>
     <td><button>Remove from cart</button></td>

   </tr>
  )
}

export default SingleCartRow