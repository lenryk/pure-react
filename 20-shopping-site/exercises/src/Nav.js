import React, { useEffect, useState } from "react";

const Nav = ({ activeTab, onTabChange, items }) => {
  const [itemsTotal, setItemsTotal] = useState(0);
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;

  useEffect(() => {
    setItemsTotal(items.reduce((accum, prev) => accum + prev.count, 0));
  }, [items]);

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>Cart</button>
        </li>
      </ul>
      {itemsTotal > 0 && <p className="App-nav-items">{itemsTotal} items</p>}
    </nav>
  );
};

export default Nav;
