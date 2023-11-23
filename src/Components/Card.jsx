import React from 'react'
const Card = ({curProduct}) => {
  return (
    <div className='card'>
        <div className="image">
         <img src={curProduct.images[0]}/>
        </div>
        <div className="info">
             <h3><i>{curProduct.title}</i></h3> 
             <p>{curProduct.description.slice(0,50)}</p>
             <h3>${curProduct.price}</h3>
             <button>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card