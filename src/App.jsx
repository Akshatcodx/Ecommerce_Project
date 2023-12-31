import React from 'react'
import Navbar from './Components/Navbar'
import ProductPage from './Pages/ProductPage'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './Pages/singleProduct'
import Cart from './Pages/Cart';
import Error from './Pages/Error'

const App = () => {
  return (  
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ProductPage/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/singleproduct/:productId" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='*' element={<Error/>}></Route>

      </Routes>
    </div>
  )
}

export default App