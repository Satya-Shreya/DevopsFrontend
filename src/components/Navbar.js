// // Example of using state to track cart items (adjust accordingly for real data)
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [cartItemsCount, setCartItemsCount] = useState(0); // Replace this with actual cart logic

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">Thrift Heaven</Link>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/products">Buy Products</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/add-product">Sell Product</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/cart">
//               <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemsCount})
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/signup">Signup</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [cartItemsCount, setCartItemsCount] = useState(0); // Replace with actual cart logic

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         {/* Store name on the left */}
//         <Link className="navbar-brand" to="/">Thrift Heaven</Link>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             {/* Dropdown for Shop */}
//             <li className="nav-item dropdown">
//               <Link 
//                 className="nav-link dropdown-toggle" 
//                 to="#" 
//                 id="navbarDropdown" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false">
//                 Shop
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><Link className="dropdown-item" to="/products">All Products</Link></li>
//                 <li><Link className="dropdown-item" to="/bestseller">Best Seller</Link></li>
//               </ul>
//             </li>

//             {/* Other Navbar links */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/contactus">Contact Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">Signup</Link>
//             </li>

//             {/* Cart Icon */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemsCount})
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [cartItemsCount, setCartItemsCount] = useState(0); // Replace with actual cart logic

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         {/* Store name on the left */}
//         <Link className="navbar-brand" to="/">Thrift Heaven</Link>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             {/* Dropdown for Shop */}
//             <li className="nav-item dropdown">
//               <Link 
//                 className="nav-link dropdown-toggle" 
//                 to="#" 
//                 id="navbarDropdown" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false">
//                 Shop
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><Link className="dropdown-item" to="/products">All Products</Link></li>
//                 <li><Link className="dropdown-item" to="/bestseller">Best Seller</Link></li>
//               </ul>
//             </li>

//             {/* Other Navbar links */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/contactus">Contact Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">Signup</Link>
//             </li>

//             {/* Cart Icon */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemsCount})
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// function Navbar({ cartCount }) { // Accept cartCount as a prop
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         {/* Store name on the left */}
//         <Link className="navbar-brand" to="/">Thrift Heaven</Link>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             {/* Dropdown for Shop */}
//             <li className="nav-item dropdown">
//               <Link 
//                 className="nav-link dropdown-toggle" 
//                 to="#" 
//                 id="navbarDropdown" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false">
//                 Shop
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><Link className="dropdown-item" to="/products">All Products</Link></li>
//                 <li><Link className="dropdown-item" to="/sell">Sell Products</Link></li>
//               </ul>
//             </li>

//             {/* Other Navbar links */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact-us">Contact Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about-us">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">Signup</Link>
//             </li>

//             {/* Cart Icon */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartCount}) {/* Use cartCount prop */}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure this CSS file is present and correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar({ cartCount, user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Thrift Heaven</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                Shop
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/products">All Products</Link></li>
                <li><Link className="dropdown-item" to="/sell">Sell Products</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link> 
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge">{cartCount}</span>
              </Link>
            </li>

            {user ? (
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li><span className="dropdown-item">{user.name}</span></li>
                  <li><span className="dropdown-item">{user.email}</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item" onClick={onLogout}>Logout</span></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;