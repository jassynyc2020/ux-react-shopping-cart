import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  const handleDecrementQuantity = () =>
    props.onDecrementQuantity(props.item.id);
  return (
    <>
      <div>
        {props.product.name} - ${props.product.price}
        <button onClick={props.handleDecrementQuantity}>X</button>
      </div>
      <span>
        Item Name - Item Price -
        <Quantity
          quantity={props.product.quantity}
          onDecrement={handleDecrementQuantity}
        />
      </span>
    </>
  );
}

export default Product;

// add serice worker js again
