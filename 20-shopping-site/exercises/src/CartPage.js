import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items, onAddOne, onRemoveOne }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(items.reduce((accum, prev) => accum + prev.count * prev.price, 0));
  }, [items]);

  return (
    <>
      <ul className="CartPage-items">
        {items.map((item) => (
          <li key={item.id} className="CartPage-item">
            <Item item={item}>
              <div className="CartItem-controls">
                <button
                  className="CartItem-removeOne"
                  onClick={() => onRemoveOne(item)}
                >
                  &ndash;
                </button>
                <span className="CartItem-count">{item.count}</span>
                <button
                  className="CartItem-addOne"
                  onClick={() => onAddOne(item)}
                >
                  +
                </button>
              </div>
            </Item>
          </li>
        ))}
      </ul>
      {!items.length && <h2>Your cart is empty :(</h2>}
      {items.length > 0 && (
        <div className="Cart-total">Total: ${total.toFixed(2)}</div>
      )}
    </>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
