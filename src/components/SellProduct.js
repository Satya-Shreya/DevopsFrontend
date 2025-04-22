// // SellProduct.js
// import React, { useState } from 'react';
// import '../styles/SellProduct.css';

// const SellProduct = ({ onProductAdded }) => {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !description || !price || !image) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newProduct = {
//       name: productName,
//       description,
//       price: `$${price}`,
//       image: URL.createObjectURL(image), // Create local URL for the image
//     };

//     onProductAdded(newProduct); // Add product to the main product list
//     resetForm();
//   };

//   const resetForm = () => {
//     setProductName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <div className="sell-product-container">
//       <h2>Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="sell-product-form">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Product Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         />
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SellProduct;






// import React, { useState } from 'react';
// import '../styles/SellProduct.css';
// import floatingImage1 from '../assets/sell.jpg'; // Replace with your image paths
// import floatingImage2 from '../assets/contact.jpg';

// const SellProduct = ({ onProductAdded }) => {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !description || !price || !image) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newProduct = {
//       name: productName,
//       description,
//       price: `₹${price}`, // Assuming Indian Rupees
//       image: URL.createObjectURL(image), // Create local URL for the image
//     };

//     onProductAdded(newProduct); // Add product to the main product list
//     resetForm();
//   };

//   const resetForm = () => {
//     setProductName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <div className="sell-product-container">
         
//       <h2>Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="sell-product-form">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Product Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         />
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>

//       <img src={floatingImage1} alt="Floating Image 1" className="floating-image" />
//          <img src={floatingImage2} alt="Floating Image 2" className="floating-image" />
//     </div>
//   );
// };

// export default SellProduct;




// import React, { useState } from 'react';
// import '../styles/SellProduct.css';
// import floatingImage1 from '../assets/sell.jpg'; // Replace with your image paths
// import floatingImage2 from '../assets/contact.jpg';

// const SellProduct = ({ onProductAdded }) => {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !description || !price || !image) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newProduct = {
//       name: productName,
//       description,
//       price: `₹${price}`, // Assuming Indian Rupees
//       image: URL.createObjectURL(image), // Create local URL for the image
//     };

//     onProductAdded(newProduct); // Add product to the main product list
//     resetForm();
//   };

//   const resetForm = () => {
//     setProductName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <div className="sell-product-container">
//       <h2 className='sellpro'>Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="sell-product-form">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Product Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         />
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>

//       {/* Use className to apply styles */}
//       <img src={floatingImage1} alt="Floating Image 1" className="floating-image" />
//       <img src={floatingImage2} alt="Floating Image 2" className="floating-image" />
//     </div>
//   );
// };

// export default SellProduct;




// import React, { useState } from 'react';
// import '../styles/SellProduct.css';

// const SellProduct = ({ onProductAdded }) => {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !description || !price || !image) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newProduct = {
//       name: productName,
//       description,
//       price: `₹${price}`,
//       image: URL.createObjectURL(image),
//     };

//     onProductAdded(newProduct);
//     resetForm();
//   };

//   const resetForm = () => {
//     setProductName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <div className="sell-product-container">
//       <h2 className='sellpro'>Sell Your Product</h2>
//       <form onSubmit={handleSubmit} className="sell-product-form">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Product Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         />
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SellProduct;




import React, { useState } from 'react';
import '../styles/SellProduct.css';

const SellProduct = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [isAddressPopupOpen, setIsAddressPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !description || !price || !image) {
      alert("Please fill all fields.");
      return;
    }
    setIsAddressPopupOpen(true); 
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setIsAddressPopupOpen(false);
    setIsConfirmationPopupOpen(true); 
    const newProduct = {
      name: productName,
      description,
      price: `₹${price}`,
      image: URL.createObjectURL(image),
    };
    onProductAdded(newProduct);
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setAddress('');
  };

  return (
    <div className="sell-product-container">
      <h2 className='sellpro'>Sell Your Product</h2>
      <form onSubmit={handleSubmit} className="sell-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit" className="btn-submit">Submit</button>
      </form>

   
      {isAddressPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Enter Pickup Address</h3>
            <form onSubmit={handleAddressSubmit}>
              <textarea
                placeholder="Enter your address for pickup"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button type="submit" className="btn-submit">Submit Address</button>
            </form>
          </div>
        </div>
      )}

      
      {isConfirmationPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank you!</h3>
            <p>Our pickup agent will arrive to pick up your product.</p>
            <button onClick={() => setIsConfirmationPopupOpen(false)} className="btn-submit">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellProduct;


// import React, { useState } from 'react';

// const SellProduct = ({ onProductAdded }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newProduct = {
//       id: Math.random(), // Ensure a unique ID for each new product
//       name,
//       description,
//       price,
//       image,
//     };

//     onProductAdded(newProduct); // Add new product
//     setName('');
//     setDescription('');
//     setPrice('');
//     setImage('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
//       <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default SellProduct;
