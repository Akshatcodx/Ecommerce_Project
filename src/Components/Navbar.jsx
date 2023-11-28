import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { setSearch } from '../Store/Slice/productSlice';
const Navbar = () => {
  const [mode,setMode]=useState("lightTheme");
  const dispatch=useDispatch();
  const {search}=useSelector((state)=>state.productSlice);
  useEffect(()=>{
    document.body.className=mode;
  },[mode])
  const handleModeClick=()=>{
    (mode==="lightTheme")?(setMode("darkTheme")):(setMode("lightTheme"))

  }
  // passing search query
  const handleChange=(e)=>{
    dispatch(setSearch(e.target.value))

    

  }
  console.log(search);
  // passing search query
  console.log(mode);
  return (
    <div className='navbar'>
        {/* logo */}
        <div className="logo">
         <h1><Link to="/">ECart</Link></h1>
        </div>
        {/* logo */}

        {/* searchbar */}

        <div className="search">
            <input type='search' placeholder='search' onChange={handleChange} value={search}></input>
        </div>
        {/* Searchbar */}

        {/* mode */}
        <div className="mode">
          <Toggle onClick={handleModeClick}/>         
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