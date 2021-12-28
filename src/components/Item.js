import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(true)
  function addToCart(){
      setCart((cart)=>!cart)
  }

  const cartClass = cart ? "" : "in-cart";
  const color = cart ? "yellow" : "purple";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background: color}} onClick={addToCart} className="add">{cart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
