import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
    const {totalQuantity,totalPrice}=useSelector((state)=>state.productSlice);
    console.log(totalQuantity,totalPrice)
  return (
    <div className='summary'>
      <div className="sum">
         <h3>Summary</h3>
 <p style={{margin:"6px"}}><i>Total Quantity: {totalQuantity}</i></p>
 <p><i>Total Price:$ {totalPrice}</i></p>
      </div>
    </div>
  )
}

export default Summary