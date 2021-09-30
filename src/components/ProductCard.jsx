import React from "react";
import { Link } from "react-router-dom";


import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../redux/Shopping/shopping-actions";

const ProductCard = ({ product, addToCart, loadCurrentItem, includeDetails }) => {




  return (

    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          onClick={() => loadCurrentItem(product)}
          className="product-card-image"
          src={product.images.main.url}
          alt={product.title}
        />
      </Link>

      {includeDetails && (
        <>
          <div className="product-card-details">
            <p className="product-card-title">{product.title}</p>
            <p className="product-card-desc">{product.caption}</p>
            <p className="product-card-price">€{product.price}</p>
          </div>

          <button className="button"
            onClick={() => addToCart(product.id)}
            className="button product-card-button"
          >
            Quick add
          </button>
        </>)}

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
