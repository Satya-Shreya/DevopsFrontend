// import React, { useState } from 'react';
// import '../styles/Cart.css';

// function Cart({ cartItems }) {
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
//   const [address, setAddress] = useState('');

//   const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleCheckout = () => {
//     setIsCheckoutVisible(true);
//   };

//   const handleCloseCheckout = () => {
//     setIsCheckoutVisible(false);
//   };

//   const handleProceed = () => {
//     // Handle the proceed action (e.g., process the order)
//     alert(`Proceeding with order. Total: ${totalCost}, Address: ${address}`);
//     handleCloseCheckout();
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           <div className="cart-items-grid">
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <h5>{item.name}</h5>
//                 <p>Price: {item.price}</p>
//               </div>
//             ))}
//           </div>
//           <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}

//       {isCheckoutVisible && (
//         <div className="checkout-popup-overlay">
//           <div className="checkout-popup">
//             <h3>Total Cost: ${totalCost}</h3>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <button onClick={handleProceed}>Proceed</button>
//             <button onClick={handleCloseCheckout}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;



// import React, { useState } from 'react';
// import '../styles/Cart.css';

// function Cart({ cartItems }) {
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
//   const [address, setAddress] = useState('');

//   // Calculate total cost of all items in the cart
//   const totalCost = cartItems.reduce((total, item) => {
//     // Remove the currency symbol and convert to number
//     const price = Number(item.price.replace(/[^\d.-]+/g, '')); // Remove all non-numeric characters
//     return total + (isNaN(price) ? 0 : price); // Avoid NaN by checking if price is valid
//   }, 0).toFixed(2); // Set default to 0 if cart is empty

//   const handleCheckout = () => {
//     setIsCheckoutVisible(true);
//   };

//   const handleCloseCheckout = () => {
//     setIsCheckoutVisible(false);
//   };

//   const handleProceed = () => {
//     // Handle the proceed action (e.g., process the order)
//     alert(`Proceeding with order. Total: ₹${totalCost}, Address: ${address}`);
//     handleCloseCheckout();
//   };

//   return (
//     <div className="cart-container">
//       <h2 className='emp'>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           <div className="cart-items-grid">
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <h5>{item.name}</h5>
//                 <p>Price: {item.price}</p> {/* Display original price with symbol */}
//               </div>
//             ))}
//           </div>
//           <h3 className='totcost'>Total Cost: ₹{totalCost}</h3> {/* Display total cost with symbol */}
//           <button className="checkbtn" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}

//       {isCheckoutVisible && (
//         <div className="checkout-popup-overlay">
//           <div className="checkout-popup">
//             <h3>Total Cost: ₹{totalCost}</h3>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <div className="button-container"> {/* Wrap buttons in a container */}
//               <button onClick={handleProceed} className='pro'>Proceed</button>
//               <button onClick={handleCloseCheckout} className='pro'>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;





// import React, { useState } from 'react';
// import '../styles/Cart.css';

// function Cart({ cartItems, setCartItems }) { // Accept setCartItems as a prop
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
//   const [address, setAddress] = useState('');

//   // Calculate total cost of all items in the cart
//   const totalCost = cartItems.reduce((total, item) => {
//     const price = Number(item.price.replace(/[^\d.-]+/g, '')); // Remove non-numeric characters
//     return total + (isNaN(price) ? 0 : price); // Avoid NaN by checking if price is valid
//   }, 0).toFixed(2); // Set default to 0 if cart is empty

//   const handleCheckout = () => {
//     setIsCheckoutVisible(true);
//   };

//   const handleCloseCheckout = () => {
//     setIsCheckoutVisible(false);
//   };

//   const handleProceed = () => {
//     // Handle the proceed action (e.g., process the order)
//     alert(`Proceeding with order. Total: ₹${totalCost}, Address: ${address}`);
    
//     // Clear the cart
//     setCartItems([]); // This will remove all items from the cart

//     handleCloseCheckout();
//   };

//   return (
//     <div className="cart-container">
//       <h2 className='emp'>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className='msg'>Your cart is empty</p>
//       ) : (
//         <div>
//           <div className="cart-items-grid">
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <h5>{item.name}</h5>
//                 <p>Price: {item.price}</p> {/* Display original price with symbol */}
//               </div>
//             ))}
//           </div>
//           <h3 className='totcost'>Total Cost: ₹{totalCost}</h3> {/* Display total cost with symbol */}
//           <button className="checkbtn" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}

//       {isCheckoutVisible && (
//         <div className="checkout-popup-overlay">
//           <div className="checkout-popup">
//             <h3>Total Cost: ₹{totalCost}</h3>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <div className="button-container"> {/* Wrap buttons in a container */}
//               <button onClick={handleProceed} className='pro'>Proceed</button>
//               <button onClick={handleCloseCheckout} className='pro'>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;




// import React, { useState } from 'react';
// import '../styles/Cart.css';

// function Cart({ cartItems, setCartItems }) {
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
//   const [address, setAddress] = useState('');

//   const totalCost = cartItems.reduce((total, item) => {
//     const price = Number(item.price.replace(/[^\d.-]+/g, '')); // Clean price string
//     return total + (isNaN(price) ? 0 : price); // Avoid NaN by checking if price is valid
//   }, 0).toFixed(2); // Set default to 0 if cart is empty

//   const handleCheckout = () => {
//     setIsCheckoutVisible(true);
//   };

//   const handleCloseCheckout = () => {
//     setIsCheckoutVisible(false);
//   };

//   const handleProceed = () => {
//     if (!address) {
//       alert("Please enter your address."); // Address validation
//       return;
//     }
//     alert(`Proceeding with order. Total: ₹${totalCost}, Address: ${address}`);
//     setCartItems([]); // Clear the cart
//     handleCloseCheckout();
//   };

//   return (
//     <div className="cart-container">
//       <h2 className='emp'>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className='msg'>Your cart is empty</p>
//       ) : (
//         <div>
//           <div className="cart-items-grid">
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <h5>{item.name}</h5>
//                 <p>Price: {item.price}</p>
//               </div>
//             ))}
//           </div>
//           <h3 className='totcost'>Total Cost: ₹{totalCost}</h3>
//           <button className="checkbtn" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}
//       {isCheckoutVisible && (
//         <div className="checkout-popup-overlay">
//           <div className="checkout-popup">
//             <h3>Total Cost: ₹{totalCost}</h3>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <div className="button-container">
//               <button onClick={handleProceed} className='pro'>Proceed</button>
//               <button onClick={handleCloseCheckout} className='pro'>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;


import React, { useState } from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, setCartItems, addShippedItems }) {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [address, setAddress] = useState('');

  const totalCost = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace(/[^\d.-]+/g, ''));
    return total + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2);

  const handleCheckout = () => {
    setIsCheckoutVisible(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutVisible(false);
  };

  const handleProceed = () => {
    if (!address) {
      alert("Please enter your address.");
      return;
    }
    alert(`Proceeding with order. Total: ₹${totalCost}, Address: ${address}`);
    
    addShippedItems(cartItems);
    setCartItems([]); // Clear the cart
    handleCloseCheckout();
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h2 className='crt'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='emp'>Your cart is empty</p>
      ) : (
        <div>
          <div className="cart-items-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>Price: {item.price}</p>
                </div>
                <button onClick={() => handleDeleteItem(index)} className="delete-btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
          <h3>Total Cost: ₹{totalCost}</h3>
          <button className="checkbtn" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
      {isCheckoutVisible && (
        <div className="checkout-popup-overlay">
          <div className="checkout-popup">
            <h3>Total Cost: ₹{totalCost}</h3>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="button-container">
              <button onClick={handleProceed} className='pro'>Proceed</button>
              <button onClick={handleCloseCheckout} className='pro'>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;



// import React, { useState } from 'react';
// import '../styles/Cart.css';

// function Cart({ cartItems, setCartItems, addShippedItems }) {
//   const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
//   const [address, setAddress] = useState('');

//   const totalCost = cartItems.reduce((total, item) => {
//     const price = Number(item.price.replace(/[^\d.-]+/g, ''));
//     return total + (isNaN(price) ? 0 : price);
//   }, 0).toFixed(2);

//   const handleCheckout = () => {
//     setIsCheckoutVisible(true);
//   };

//   const handleCloseCheckout = () => {
//     setIsCheckoutVisible(false);
//   };

//   const handleProceed = () => {
//     if (!address) {
//       alert("Please enter your address.");
//       return;
//     }
//     alert(`Proceeding with order. Total: ₹${totalCost}, Address: ${address}`);
    
//     addShippedItems(cartItems);  // Move items to Shipping and Returns
//     setCartItems([]); // Clear the cart
//     handleCloseCheckout();
//   };

//   return (
//     <div className="cart-container">
//       <h2 className='crt'>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className='emp'>Your cart is empty</p>
//       ) : (
//         <div>
//           <div className="cart-items-grid">
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <h5>{item.name}</h5>
//                 <p>Price: {item.price}</p>
//               </div>
//             ))}
//           </div>
//           <h3>Total Cost: ₹{totalCost}</h3>
//           <button className="checkbtn" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}
//       {isCheckoutVisible && (
//         <div className="checkout-popup-overlay">
//           <div className="checkout-popup">
//             <h3>Total Cost: ₹{totalCost}</h3>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <div className="button-container">
//               <button onClick={handleProceed} className='pro'>Proceed</button>
//               <button onClick={handleCloseCheckout} className='pro'>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
