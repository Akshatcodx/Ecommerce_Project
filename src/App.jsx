import React from 'react'
import Navbar from './Components/Navbar'
import ProductPage from './Pages/ProductPage'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './Pages/singleProduct'

const App = () => {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<ProductPage/>}></Route>
        <Route path="/singleproduct/:productId" element={<SingleProduct/>}></Route>

      </Routes>
    </div>
  )
}

export default App