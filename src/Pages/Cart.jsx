import React from 'react'
import { useSelector } from 'react-redux'
import SingleCartRow from '../Components/SingleCartRow'

const Cart = () => {
    const {cart}=useSelector((state)=>state.productSlice)
    console.log("this is cart",cart)
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
            </div>
        </div>
    </div>
  )
}

export default Cart