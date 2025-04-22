// ShippingAndReturns.js

import React from 'react';
import '../styles/ShippingAndReturns.css';

function ShippingAndReturns({ shippedItems }) {
  return (
    <div className="shipping-returns-container">
      <h2>Shipping and Returns</h2>
      {shippedItems.length === 0 ? (
        <p>No items have been shipped yet.</p>
      ) : (
        <div className="shipped-items-grid">
          {shippedItems.map((item, index) => (
            <div key={index} className="shipped-item">
              <img src={item.image} alt={item.name} className="shipped-item-image" />
              <h5>{item.name}</h5>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShippingAndReturns;
