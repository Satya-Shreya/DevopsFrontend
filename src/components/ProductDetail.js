import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const product = {
    id: 1,
    name: 'Vintage Jacket',
    description: 'A cool vintage jacket',
    deliveryDate: '2024-10-30',
    image: '/images/jacket.jpg',
  }; // Fetch product data dynamically from API or state

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Delivery Date: {product.deliveryDate}</p>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
