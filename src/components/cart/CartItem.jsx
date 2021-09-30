import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={item.images.main.url}
        alt={item.title}
      />
      <div className="cart-item-details">
        <p className="cart-item-title">{item.title}</p>
        {/* <p className="cart-item-details">{item.caption}</p> */}
        <p className="cart-item-details-price">€ {item.price}</p>
      </div>
      <div className="cart-item-actions">
        <div className="cart-item-qty">
          <label htmlFor="qty">Qty:</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button className="trash-button"
          onClick={() => removeFromCart(item.id)}
        >
         
         <FontAwesomeIcon icon={faTrash} />

       
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
