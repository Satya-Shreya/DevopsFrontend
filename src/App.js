// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BestSellers from './components/BestSeller';
// // import ContactUs from './components/ContactUS';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//       <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<Home />} /> {/* Home route */}
//                 <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//                 {/* Define other routes here */}
//             </Routes>
//         </Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* <Route path="/contact-us" element={<ContactUs />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import ContactUs from './components/ContactUS';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* <Route path="/contact-us" element={<ContactUs />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs'; // Uncommented to import ContactUs
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs'; // Uncommented to import ContactUs
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   // Handle adding product to cart, avoiding duplicates
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.name === product.name);
//       if (isProductInCart) {
//         return prevItems; // Don't add duplicate
//       }
//       return [...prevItems, product]; // Add product if not already in cart
//     });
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Add Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs'; // Uncommented to import ContactUs
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   // Handle adding product to cart, avoiding duplicates
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.name === product.name);
//       if (isProductInCart) {
//         return prevItems; // Don't add duplicate
//       }
//       return [...prevItems, product]; // Add product if not already in cart
//     });
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs'; // Uncommented to import ContactUs
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

  
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.name === product.name);
//       if (isProductInCart) {
//         return prevItems; // Don't add duplicate
//       }
//       return [...prevItems, product]; // Add product if not already in cart
//     });
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs';
// import AboutUs from './components/AboutUs'; // Import the AboutUs component
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.name === product.name);
//       if (isProductInCart) {
//         return prevItems; // Don't add duplicate
//       }
//       return [...prevItems, product]; // Add product if not already in cart
//     });
//   };



//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//           <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import productData from './components/products.json'; // Import your JSON file

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Load initial products from JSON file
//     setProducts(productData);
//   }, []);

//   // Function to add product to cart if it's not already added
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.id === product.id);
//       return isProductInCart ? prevItems : [...prevItems, product];
//     });
//   };

//   // Function to handle product addition from SellProduct form
//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
//           <Route path="/sell" element={<SellProduct onProductAdded={handleProductAdded} />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//           <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import productData from './components/products.json'; // Import your JSON file

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Load initial products from JSON file
//     setProducts(productData);
//   }, []);

//   // Function to add product to cart if it's not already added
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.id === product.id);
//       return isProductInCart ? prevItems : [...prevItems, product];
//     });
//   };

//   // Function to handle product addition from SellProduct form
//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route 
//             path="/products" 
//             element={<Products products={products} onAddToCart={handleAddToCart} />} 
//           />
//           <Route 
//             path="/sell" 
//             element={<SellProduct onProductAdded={handleProductAdded} />} 
//           />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route 
//             path="/cart" 
//             element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
//           /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//           <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import productData from './components/products.json'; // Import your JSON file

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Load initial products from JSON file
//     setProducts(productData);
//   }, []);

//   // Function to add product to cart
//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       // Uncomment the following line if you want to allow multiple quantities of the same product
//       // return [...prevItems, product];

//       // Check if product already exists in the cart
//       const existingProduct = prevItems.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevItems; // Product already in cart, return the previous state
//       }
//       return [...prevItems, product]; // Add new product to cart
//     });
//   };

//   // Function to handle product addition from SellProduct form
//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route 
//             path="/products" 
//             element={<Products products={products} onAddToCart={handleAddToCart} />} 
//           />
//           <Route 
//             path="/sell" 
//             element={<SellProduct onProductAdded={handleProductAdded} />} 
//           />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route 
//             path="/cart" 
//             element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
//           /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import productData from './components/products.json';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
//   const [redirectPath, setRedirectPath] = useState(null); // Redirect path

//   useEffect(() => {
//     setProducts(productData);
//   }, []);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingProduct = prevItems.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevItems;
//       }
//       return [...prevItems, product];
//     });
//   };

//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   const requireAuth = (Component) => {
//     return isAuthenticated ? <Component /> : <Navigate to="/login" />;
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
//           <Route path="/sell" element={requireAuth(() => <SellProduct onProductAdded={handleProductAdded} />)} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route 
//             path="/login" 
//             element={<LoginPage setIsAuthenticated={setIsAuthenticated} redirectPath={redirectPath} />} 
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs';
// import ShippingAndReturns from './components/ShippingAndReturns'; // Import new component
// import 'bootstrap/dist/css/bootstrap.min.css';
// import productData from './components/products.json';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [shippedItems, setShippedItems] = useState([]); // New state for shipped items
//   const [products, setProducts] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [redirectPath, setRedirectPath] = useState(null);

//   useEffect(() => {
//     setProducts(productData);
//   }, []);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingProduct = prevItems.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevItems;
//       }
//       return [...prevItems, product];
//     });
//   };

//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   const addShippedItems = (items) => {
//     setShippedItems((prevItems) => [...prevItems, ...items]);
//   };

//   const requireAuth = (Component) => {
//     return isAuthenticated ? <Component /> : <Navigate to="/login" />;
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
//           <Route path="/sell" element={requireAuth(() => <SellProduct onProductAdded={handleProductAdded} />)} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} addShippedItems={addShippedItems} />} />
//           <Route path="/shipping-returns" element={<ShippingAndReturns shippedItems={shippedItems} />} />
//           <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} redirectPath={redirectPath} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/about-us" element={<AboutUs />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import SellProduct from './components/SellProduct';
import AboutUs from './components/AboutUs';
import ShippingAndReturns from './components/ShippingAndReturns'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from './components/products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [shippedItems, setShippedItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    setProducts(productData);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const addShippedItems = (items) => {
    setShippedItems((prevItems) => [...prevItems, ...items]);
  };

  const requireAuth = (Component) => {
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartItems.length} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/sell" element={requireAuth(() => <SellProduct onProductAdded={handleProductAdded} />)} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} addShippedItems={addShippedItems} />} />
          <Route path="/shipping-returns" element={<ShippingAndReturns shippedItems={shippedItems} />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUser={setUser} redirectPath={redirectPath} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import LoginPage from './components/LoginPage';
// import Signup from './components/Signup';
// import BestSellers from './components/BestSeller';
// import ContactUs from './components/ContactUs';
// import SellProduct from './components/SellProduct';
// import AboutUs from './components/AboutUs'; // Import the AboutUs component
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prevItems) => {
//       const isProductInCart = prevItems.some(item => item.name === product.name);
//       if (isProductInCart) {
//         return prevItems; // Don't add duplicate
//       }
//       return [...prevItems, product]; // Add product if not already in cart
//     });
//   };

//   const [products, setProducts] = React.useState([]); // State for all products

//   const handleProductAdded = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]); // Add new product to list
//   };


//   return (
//     <Router>
//       <div className="App">
//         <Navbar cartCount={cartItems.length} /> {/* Pass cart count to Navbar */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/bestseller" element={<BestSellers />} /> {/* Best Seller route */}
//           <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
//           <Route
//             path="/sell"
//             element={<SellProduct onProductAdded={handleProductAdded} />}
//           />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Pass setCartItems to Cart */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
//           <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
