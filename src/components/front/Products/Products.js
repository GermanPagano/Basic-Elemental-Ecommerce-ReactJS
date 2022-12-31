import React from "react";
import "./Products.css";

const Products = ({ productsAll ,handleAddProduct }) => {

  return (
    <div className="products" >
      {productsAll.map((oneProduct) => {
        return (
          <div className="card" key={oneProduct.id}>
            <div>
              <img className="product-img"  src={oneProduct.imgUrl} alt={oneProduct.name} />
            </div>
            <div>
              <h3 className="product-name">{oneProduct.name}</h3>
            </div>
            <div>
              <p className="product-price">{oneProduct.price}</p>
            </div>
            <div>
              <button className="product-add-button" onClick={()=> handleAddProduct(oneProduct)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
