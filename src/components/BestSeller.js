import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BestSeller.css';

const bestSellers = [
  { id: 1, imgSrc: 'https://via.placeholder.com/150', price: '$25', description: 'Product 1' },
  { id: 2, imgSrc: 'https://via.placeholder.com/150', price: '$35', description: 'Product 2' },
  { id: 3, imgSrc: 'https://via.placeholder.com/150', price: '$45', description: 'Product 3' },
  { id: 4, imgSrc: 'https://via.placeholder.com/150', price: '$55', description: 'Product 4' },
  { id: 5, imgSrc: 'https://via.placeholder.com/150', price: '$65', description: 'Product 5' },
  { id: 6, imgSrc: 'https://via.placeholder.com/150', price: '$75', description: 'Product 6' },
  { id: 7, imgSrc: 'https://via.placeholder.com/150', price: '$85', description: 'Product 7' },
  { id: 8, imgSrc: 'https://via.placeholder.com/150', price: '$95', description: 'Product 8' },
  { id: 9, imgSrc: 'https://via.placeholder.com/150', price: '$105', description: 'Product 9' },
  { id: 10, imgSrc: 'https://via.placeholder.com/150', price: '$115', description: 'Product 10' },
  { id: 11, imgSrc: 'https://via.placeholder.com/150', price: '$125', description: 'Product 11' },
  { id: 12, imgSrc: 'https://via.placeholder.com/150', price: '$135', description: 'Product 12' },
];

function BestSellers() {
  return (
    <div className="best-sellers-container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Thrift Heaven</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Best Sellers Grid */}
      <h2 className="page-title">Best Sellers</h2>
      <div className="product-grid">
        {bestSellers.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.description} className="product-image" />
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
