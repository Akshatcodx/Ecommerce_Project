import React from 'react';
import {Link} from "react-router-dom";
import Toggle from 'react-toggle';
import "react-toggle/style.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* logo */}
        <div className="logo">
         <h1><Link to="/">ECart</Link></h1>
        </div>
        {/* logo */}

        {/* searchbar */}

        <div className="search">
            <input type='search' placeholder='search'></input>
        </div>
        {/* Searchbar */}

        {/* mode */}
        <div className="mode">
          <Toggle/>         
        </div>
        {/* mode */}

        {/* list */}
        <div className="list">
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/wishlist"> Wishlist</Link></li>
            </ul>

        </div>
        {/* list */}

    </div>
  )
}

export default Navbar