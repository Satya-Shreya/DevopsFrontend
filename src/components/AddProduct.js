import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    deliveryDate: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit product data to backend (firebase or API)
    console.log('Product added:', formData);
  };

  return (
    <div className="add-product-container">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" className="form-control" onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Delivery Date</label>
          <input type="date" name="deliveryDate" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Product Image</label>
          <input type="file" name="image" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
