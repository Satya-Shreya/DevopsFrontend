// import React from "react";
// import '../styles/Product.css';

// const Products = () => {
//   const productList = [
//     {
//       name: "Product 1",
//       description: "This is a great product",
//       price: "$10",
//       image: "https://via.placeholder.com/300"
//     },
//     {
//       name: "Product 2",
//       description: "Another awesome product",
//       price: "$15",
//       image: "https://via.placeholder.com/300"
//     },
//     {
//       name: "Product 3",
//       description: "Don't miss this one",
//       price: "$12",
//       image: "https://via.placeholder.com/300"
//     },
//     {
//       name: "Product 4",
//       description: "High quality guaranteed",
//       price: "$20",
//       image: "https://via.placeholder.com/300"
//     },
//     {
//       name: "Product 5",
//       description: "Affordable and durable",
//       price: "$8",
//       image: "https://via.placeholder.com/300"
//     }
//   ];

//   return (
//     <div className="container">
//       <div className="row available-products">
//         {productList.map((product, index) => (
//           <div key={index} className="col-md-4">
//             <div className="product-card">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="product-image"
//               />
//               <div className="product-info">
//                 <h5>{product.name}</h5>
//                 <p>{product.description}</p>
//                 <p className="product-price">{product.price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from "react";
// import '../styles/Product.css'; // Ensure you have the CSS file
// import productsData from './products.json'; // Adjust the path as needed

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     setProducts(productsData); // Load products from JSON
//   }, []);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} added to cart!`); // Optional: Alert on add
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Available Products</h2>
//       <div className="row">
//         {products.map((product, index) => (
//           <div key={index} className="col-md-2 mb-4"> {/* 5 items in a row */}
//             <div className="card">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="card-img-top"
//                 style={{ height: '150px', objectFit: 'contain' }} // Ensure image fits well
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-price">{product.price}</p>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




// import React, { useState, useEffect } from "react";
// import '../styles/Product.css'; // Ensure you have the CSS file
// import productData from './products.json'; // Adjust the path as necessary

// const Products = () => {
//   const [cart, setCart] = useState([]);
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     setProductList(productData); // Load products from JSON
//   }, []);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="container">
//       <div className="row available-products">
//         {productList.map((product, index) => (
//           <div key={index} className="col-md-2"> {/* Adjusted for 5 in a row */}
//             <div className="card">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-price">{product.price}</p>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Optional: Display the cart items */}
//       <div className="mt-4">
//         <h3>Cart</h3>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>{item.name} - {item.price}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Products;



// import React, { useState, useEffect } from "react";
// import '../styles/Product.css'; // Ensure you have the CSS file
// import productData from './products.json'; // Adjust the path as necessary

// const Products = () => {
//   const [cart, setCart] = useState([]);
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     setProductList(productData); // Load products from JSON
//   }, []);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="container">
//       <div className="grid-container">
//         {productList.map((product, index) => (
//           <div key={index} className="product-card"> {/* Use product-card directly */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button
//                 className="btn-add-to-cart"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Optional: Display the cart items */}
//       <div className="mt-4">
        
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>{item.name} - {item.price}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Products;



// import React from "react";
// import '../styles/Product.css'; // Ensure you have the CSS file
// import productData from './products.json'; // Import JSON data

// const Products = () => {
//   return (
//     <div className="container">
//       <div className="grid-container">
//         {productData.map((product, index) => (
//           <div key={index} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button className="btn-add-to-cart">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useState } from "react";
// import '../styles/Product.css';
// import productData from './products.json';

// const Products = () => {
//   // State to manage popup visibility and selected image
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   // Function to open popup with selected image
//   const openPopup = (image) => {
//     setSelectedImage(image);
//     setIsPopupVisible(true);
//   };

//   // Function to close popup
//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setSelectedImage("");
//   };

//   return (
//     <div className="container">
//       <div className="grid-container">
//         {productData.map((product, index) => (
//           <div key={index} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//               onClick={() => openPopup(product.image)} // Trigger popup on click
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button className="btn-add-to-cart">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup overlay */}
//       {isPopupVisible && (
//         <div className="image-popup-overlay" onClick={closePopup}>
//           <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closePopup}>&times;</button>
//             <img src={selectedImage} alt="Popup" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;


// import React, { useState } from "react";
// import '../styles/Product.css';
// import productData from './products.json';

// const Products = ({ onAddToCart }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const openPopup = (image) => {
//     setSelectedImage(image);
//     setIsPopupVisible(true);
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setSelectedImage("");
//   };

//   return (
//     <div className="container">
//       <div className="grid-container">
//         {productData.map((product, index) => (
//           <div key={index} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//               onClick={() => openPopup(product.image)}
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button
//                 className="btn-add-to-cart"
//                 onClick={() => onAddToCart(product)} // Call onAddToCart with product info
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isPopupVisible && (
//         <div className="image-popup-overlay" onClick={closePopup}>
//           <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closePopup}>&times;</button>
//             <img src={selectedImage} alt="Popup" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;




//***main code without search filter */
// import React, { useState } from "react";
// import '../styles/Product.css';

// const Products = ({ products, onAddToCart }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const openPopup = (image) => {
//     setSelectedImage(image);
//     setIsPopupVisible(true);
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setSelectedImage("");
//   };

//   return (
//     <div className="container">
//       <div className="grid-container">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//               onClick={() => openPopup(product.image)}
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button
//                 className="btn-add-to-cart"
//                 onClick={() => onAddToCart(product)} // Call onAddToCart with product info
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isPopupVisible && (
//         <div className="image-popup-overlay" onClick={closePopup}>
//           <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closePopup}>&times;</button>
//             <img src={selectedImage} alt="Popup" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;



import React, { useState } from "react";
import '../styles/Product.css';

const Products = ({ products, onAddToCart }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedImage("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onClick={() => openPopup(product.image)}
              />
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button
                  className="btn-add-to-cart"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>

      {isPopupVisible && (
        <div className="image-popup-overlay" onClick={closePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>&times;</button>
            <img src={selectedImage} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;




// import React, { useState } from "react";
// import '../styles/Product.css';

// const Products = ({ products, onAddToCart }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const openPopup = (image) => {
//     setSelectedImage(image);
//     setIsPopupVisible(true);
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setSelectedImage("");
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter products based on the search term
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       {/* Centered Search Input */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <div className="grid-container">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <div key={index} className="product-card">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="product-image"
//                 onClick={() => openPopup(product.image)}
//               />
//               <div className="product-info">
//                 <h5 className="product-name">{product.name}</h5>
//                 <p className="product-description">{product.description}</p>
//                 <p className="product-price">{product.price}</p>
//                 <button
//                   className="btn-add-to-cart"
//                   onClick={() => onAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No products found</p>
//         )}
//       </div>

//       {isPopupVisible && (
//         <div className="image-popup-overlay" onClick={closePopup}>
//           <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closePopup}>&times;</button>
//             <img src={selectedImage} alt="Popup" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;




// // Products.js
// import React, { useState } from "react";
// import '../styles/Product.css';
// import Cart from './Cart';

// const Products = ({ products, onAddToCart }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const openPopup = (image) => {
//     setSelectedImage(image);
//     setIsPopupVisible(true);
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//     setSelectedImage("");
//   };

//   return (
//     <div className="container">
//       <div className="grid-container">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image"
//               onClick={() => openPopup(product.image)}
//             />
//             <div className="product-info">
//               <h5 className="product-name">{product.name}</h5>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">{product.price}</p>
//               <button
//                 className="btn-add-to-cart"
//                 onClick={() => onAddToCart(product)} // Call onAddToCart with product info
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isPopupVisible && (
//         <div className="image-popup-overlay" onClick={closePopup}>
//           <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closePopup}>&times;</button>
//             <img src={selectedImage} alt="Popup" className="popup-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
