import React from 'react'


export default function ProductCard({price="unknown", amount="unknown", name="unknonw", about="unknown", color="unknown", size="unknown", image}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{about}</p>
      <p>Price: {price}</p>
      <p>Amount: {amount}</p>
      <p>Color: {color}</p>
      <p>Size: {size}</p>
    </div>
  ) 
}
