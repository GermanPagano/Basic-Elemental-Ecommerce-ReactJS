import React from "react";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart";

const RoutesComponent = ({ productsAll, cartItems, handleAddProduct , handleRemoveProduct , handleClearCart }) => {
  return (
    <div>
      <Routes>

      <Route
          path="/Basic-Elemental-Ecommerce-ReactJS/"
          element={<Products productsAll={productsAll} handleAddProduct={handleAddProduct}/>}
          exact
        />
        <Route
          path="/Basic-Elemental-Ecommerce-ReactJS/Home"
          element={<Products productsAll={productsAll} handleAddProduct={handleAddProduct}/>}
          exact
        />
        <Route
          path="/Basic-Elemental-Ecommerce-ReactJS/Cart"
          element={
            <Cart 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct}  
            handleRemoveProduct={handleRemoveProduct}
            handleClearCart={handleClearCart}  
            />
          }
          exact
        />
        <Route path="/" exact />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
