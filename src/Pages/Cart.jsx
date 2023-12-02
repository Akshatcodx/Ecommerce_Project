import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCartRow from '../Components/SingleCartRow'
import Summary from '../Components/Summary'
import { Link } from 'react-router-dom'
import { clearCart, getTotal } from '../Store/Slice/productSlice'

const Cart = () => {
    const {cart}=useSelector((state)=>state.productSlice)
    console.log("this is cart",cart);
    const dispatch=useDispatch();
    dispatch(getTotal());
    
  return (
    <div className="cartPage">
        {/* <Navbar/> */}
        <div className="cart">
            <div className="tableContainer">
                <table border="2px">
                    <thead>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>

                    </thead>
                    <tbody>
                        {
                            cart.map((cartItem)=>{
                                return <SingleCartRow key={cartItem.id} cartItem={cartItem}/>

                            })
                        }

                    </tbody>

                </table>
                <div className="buttons">
                    <Link to="/products">
               <span>Continue Shopping</span>
                     
                    </Link>
               <span onClick={()=>{dispatch(clearCart())}}>Clear Cart</span>
  </div>
            </div>
        </div>
        <Summary/>

    </div>
  )
}

export default Cart