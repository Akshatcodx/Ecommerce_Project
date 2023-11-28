import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Filter from '../Components/Filter'

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <Filter/>
        <Products/>
    </div>
  )
}

export default ProductPage