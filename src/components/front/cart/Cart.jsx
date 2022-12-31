import React from "react";
import "./Cart-Styles.css";

const Cart = ({ cartItems , handleAddProduct , handleRemoveProduct, handleClearCart }) => {

  const totalPrice = cartItems.reduce((price,item)=> price + item.quantity * item.price,0)

  return (
    <div className="cart-section">
      <div className="cart-items-header">Thanks 4 buy</div>
      <div className="cart-items-clear">
              { cartItems.length >=1 && (<button className="button-clear" onClick={handleClearCart}>Clear All</button>)}
            </div>
      {cartItems.length === 0 ? (
        <div className="cart-item-noAdded"> No items added</div>
      ) : (
        <div >
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-list">
            <img
              className="cart-items-img"
              src={item.imgUrl}
              alt={item.name}
            />
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-function">
            <button className="cart-items-add" onClick={ ()=> handleAddProduct(item) }>+</button>
            <button className="cart-items-remove" onClick={ ()=> handleRemoveProduct(item) }>-</button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * $ {item.price}
            </div>
            </div>
          ))}

          <div className="cart-items-total-price">
              Total Price : $ { totalPrice.toFixed(2) }
            </div>


        </div>
      )}
    </div>
  );
};

export default Cart;
