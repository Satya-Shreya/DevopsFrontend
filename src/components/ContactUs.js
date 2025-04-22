// // ContactUs.js
// import React from 'react';
// import '../styles/ContactUs.css';

// const ContactUs = () => {
//   return (
//     <section className="contact-section">
//       <div className="contact-bg">
//         <h3>Get in Touch with Us</h3>
//         <h2>Contact Us</h2>
//         <div className="line">
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <p className="text">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos
//           impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis,
//           maxime enim, optio ab dolorum sequi qui.
//         </p>
//       </div>

//       <div className="contact-body">
//         <div className="contact-info">
//           <div>
//             <span><i className="fas fa-mobile-alt"></i></span>
//             <span>Phone No.</span>
//             <span className="text">1-2392-23928-2</span>
//           </div>
//           <div>
//             <span><i className="fas fa-envelope-open"></i></span>
//             <span>E-mail</span>
//             <span className="text">mail@company.com</span>
//           </div>
//           <div>
//             <span><i className="fas fa-map-marker-alt"></i></span>
//             <span>Address</span>
//             <span className="text">2939 Patrick Street, Victoria TX, United States</span>
//           </div>
//           <div>
//             <span><i className="fas fa-clock"></i></span>
//             <span>Opening Hours</span>
//             <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
//           </div>
//         </div>

//         <div className="contact-form">
//           <form>
//             <div>
//               <input type="text" className="form-control" placeholder="First Name" />
//               <input type="text" className="form-control" placeholder="Last Name" />
//             </div>
//             <div>
//               <input type="email" className="form-control" placeholder="E-mail" />
//               <input type="text" className="form-control" placeholder="Phone" />
//             </div>
//             <textarea rows="5" placeholder="Message" className="form-control"></textarea>
//             <input type="submit" className="send-btn" value="Send Message" />
//           </form>

//           <div>
//             {/* <img src="C:\Users\Shreya\Desktop\React Project\thriftstore\src\assets\contactussamples" alt="Contact Us" /> */}
//           </div>
//         </div>
//       </div>

//       <div className="map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
//           width="100%"
//           height="450"
//           frameBorder="0"
//           allowFullScreen=""
//           aria-hidden="false"
//           tabIndex="0"
//         ></iframe>
//       </div>

//       <div className="contact-footer">
//         <h3>Follow Us</h3>
//         <div className="social-links">
//           <a href="#" className="fab fa-facebook-f"></a>
//           <a href="#" className="fab fa-twitter"></a>
//           <a href="#" className="fab fa-instagram"></a>
//           <a href="#" className="fab fa-linkedin"></a>
//           <a href="#" className="fab fa-youtube"></a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   // Toggle Map Pop-up
//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Header Section */}
//       <div className="header-image">
//         <h1>Thrift Heaven Help Center</h1>
//       </div>

//       {/* Services Section */}
//       <div className="services">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   // Toggle Map Pop-up
//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Header Section */}
//       <div className="header-image">
//         <h1>Thrift Heaven Help Center</h1>
//       </div>

//       {/* Services Section */}
//       <div className="services">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <>
//     <div className="contact-us-container">
//       {/* Header Section */}
//       {/* <div className="header-image"> */}
//         <h2 className='header-image'>Thrift Heaven Help Center</h2>
//         {/* <img src="../assets/contact-us2-removebg-preview.png" alt="Contact Us" /> */}
//       {/* </div> */}
//     </div>

//       {/* Services Section */}
//       <div className="services">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ContactUs;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Left Section: Header Image */}
//       <div className="header-image-container">
//         {/* <h2>Thrift Heaven Help Center</h2> */}
//       </div>

//       {/* Right Section: Services */}
//       <div className="services-container">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <>
//       {/* Parallax Image Header */}
//       <div className="header-image"></div>

//       {/* Services Section */}
//       <div className="services">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ContactUs;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);

//   // Toggle Map Pop-up
//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Header Section */}
//       <div className="header-image">
//         <h2>Thrift Heaven Help Center</h2>
//       </div>

//       {/* Services Section */}
//       <div className="services">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service">
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phonePattern = /^\d{10}$/; // Regular expression for 10-digit phone number
//     if (!phonePattern.test(phoneNumber)) {
//       setErrorMessage('Please enter a valid 10-digit phone number.');
//       setSuccessMessage('');
//     } else {
//       setSuccessMessage('You will receive a call shortly.');
//       setErrorMessage('');
//       setPhoneNumber('');
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Left Section: Header Image */}
//       <div className="header-image-container">
//         {/* <h2>Thrift Heaven Help Center</h2> */}
//       </div>

//       {/* Right Section: Services */}
//       <div className="services-container">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service" onClick={togglePopup}>
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at (123) 456-7890 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap}>Close</button>
//           </div>
//         </div>
//       )}

//       {/* Contact Support Popup */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Contact Support</h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 placeholder="Enter your 10-digit phone number"
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//                 required
//               />
//               <button type="submit">Submit</button>
//               <button type="button" onClick={togglePopup}>Close</button>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {successMessage && <p className="success-message">{successMessage}</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phonePattern = /^\d{10}$/; // Regular expression for 10-digit phone number
//     if (!phonePattern.test(phoneNumber)) {
//       setErrorMessage('Please enter a valid 10-digit phone number.');
//       setSuccessMessage('');
//     } else {
//       setSuccessMessage('You will receive a call shortly.');
//       setErrorMessage('');
//       setPhoneNumber('');
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Left Section: Header Image */}
//       <div className="header-image-container">
//         {/* Add your image */}
//         {/* <img src="path/to/your/image.jpg" alt="Contact Us" /> */}
//       </div>

//       {/* Right Section: Services */}
//       <div className="services-container">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service" onClick={togglePopup}>
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at 9247503220 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2 className='store'>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093543!2d144.96315791589745!3d-37.81627944256844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8b0d19c7c6!2sThrift%20Store!5e0!3m2!1sen!2sau!4v1642612577896!5m2!1sen!2sau"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap} className='pcl'>Close</button>
//           </div>
//         </div>
//       )}

//       {/* Contact Support Popup */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Contact Support</h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 placeholder="Enter your 10-digit phone number"
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//                 required
//               />
//               <div className="popup-buttons">
//                 <button type="submit" className='psub'>Submit</button>
//                 <button type="button" onClick={togglePopup} className='pcl'>Close</button>
//               </div>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {successMessage && <p className="success-message">{successMessage}</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phonePattern = /^\d{10}$/; // Regular expression for 10-digit phone number
//     if (!phonePattern.test(phoneNumber)) {
//       setErrorMessage('Please enter a valid 10-digit phone number.');
//       setSuccessMessage('');
//     } else {
//       setSuccessMessage('You will receive a call shortly.');
//       setErrorMessage('');
//       setPhoneNumber('');
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Left Section: Header Image */}
//       <div className="header-image-container">
//         {/* Add your image */}
//         {/* <img src="path/to/your/image.jpg" alt="Contact Us" /> */}
//       </div>

//       {/* Right Section: Services */}
//       <div className="services-container">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/cart')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service" onClick={togglePopup}>
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at 9247503220 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2 className='store'>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311037.6538036027!2d80.5994865799494!3d16.506517136427084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34a6311bc6794f%3A0x15c72a5938c07b74!2s33-16-24%2C%20Prabhu%20Nilayam%2C%20Kasturibai%20Pet%2C%20Ramanadhan%20Street%2C%20Vijayawada%2C%20Andhra%20Pradesh%2C%20India%2C%20520002!5e0!3m2!1sen!2sus!4v1642612577896!5m2!1sen!2sus"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap} className='pcl'>Close</button>
//           </div>
//         </div>
//       )}

//       {/* Contact Support Popup */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Contact Support</h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 placeholder="Enter your 10-digit phone number"
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//                 required
//               />
//               <div className="popup-buttons">
//                 <button type="submit" className='psub'>Submit</button>
//                 <button type="button" onClick={togglePopup} className='pcl'>Close</button>
//               </div>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {successMessage && <p className="success-message">{successMessage}</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShippingFast, FaStore, FaUserCircle, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa';
// import '../styles/ContactUs.css';

// function ContactUs() {
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const phonePattern = /^\d{10}$/; // Regular expression for 10-digit phone number
//     if (!phonePattern.test(phoneNumber)) {
//       setErrorMessage('Please enter a valid 10-digit phone number.');
//       setSuccessMessage('');
//     } else {
//       setSuccessMessage('You will receive a call shortly.');
//       setErrorMessage('');
//       setPhoneNumber('');
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Left Section: Header Image */}
//       <div className="header-image-container">
//         {/* Add your image */}
//         {/* <img src="path/to/your/image.jpg" alt="Contact Us" /> */}
//       </div>

//       {/* Right Section: Services */}
//       <div className="services-container">
//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShippingFast className="service-icon" />
//           <h3>Shipping & Returns</h3>
//           <p>Track your shipped items and understand return policies.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/shipping-returns')}>
//           <FaShoppingCart className="service-icon" />
//           <h3>Track Order</h3>
//           <p>Review your order history and manage current orders.</p>
//         </div>

//         <div className="service" onClick={toggleMap}>
//           <FaStore className="service-icon" />
//           <h3>Store Pickup</h3>
//           <p>Find your nearest store for easy pick-up options.</p>
//         </div>

//         <div className="service" onClick={() => navigate('/login')}>
//           <FaUserCircle className="service-icon" />
//           <h3>Account</h3>
//           <p>Log in to manage your account settings and preferences.</p>
//         </div>

//         <div className="service" onClick={togglePopup}>
//           <FaPhone className="service-icon" />
//           <h3>Contact Support</h3>
//           <p>Need help? Call us at 9247503220 for support.</p>
//         </div>

//         <div className="service">
//           <FaEnvelope className="service-icon" />
//           <h3>Email Support</h3>
//           <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
//         </div>
//       </div>

//       {/* Map Popup */}
//       {showMap && (
//         <div className="map-popup">
//           <div className="map-content">
//             <h2 className='store'>Store Location</h2>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311037.6538036027!2d80.5994865799494!3d16.506517136427084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34a6311bc6794f%3A0x15c72a5938c07b74!2s33-16-24%2C%20Prabhu%20Nilayam%2C%20Kasturibai%20Pet%2C%20Ramanadhan%20Street%2C%20Vijayawada%2C%20Andhra%20Pradesh%2C%20India%2C%20520002!5e0!3m2!1sen!2sus!4v1642612577896!5m2!1sen!2sus&markers=33.5251294,80.6281385"
//               width="600"
//               height="450"
//               style={{ border: '0' }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <button onClick={toggleMap} className='pcl'>Close</button>
//           </div>
//         </div>
//       )}

//       {/* Contact Support Popup */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Contact Support</h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 placeholder="Enter your 10-digit phone number"
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//                 required
//               />
//               <div className="popup-buttons">
//                 <button type="submit" className='psub'>Submit</button>
//                 <button type="button" onClick={togglePopup} className='pcl'>Close</button>
//               </div>
//             </form>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {successMessage && <p className="success-message">{successMessage}</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMap from './Maps';
import { FaShippingFast, FaStore, FaUserCircle, FaPhone, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import '../styles/ContactUs.css';

function ContactUs() {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [feedbacks, setFeedbacks] = useState([
    { username: "Samna", text: "Great service and prompt delivery!" },
    { username: "Keerthana", text: "Had an issue with the product, but support was helpful." },
    { username: "Manasa", text: "Satisfied with the quality. Will order again." }
  ]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const toggleMap = () => setShowMap(!showMap);
  const togglePopup = () => setShowPopup(!showPopup);
  const toggleFeedbackModal = () => setShowFeedbackModal(!showFeedbackModal);
  
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      setSuccessMessage('');
    } else {
      setSuccessMessage('You will receive a call shortly.');
      setErrorMessage('');
      setPhoneNumber('');
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (newFeedback && newUsername) {
      setFeedbacks([...feedbacks, { username: newUsername, text: newFeedback }]);
      setNewFeedback('');
      setNewUsername('');
      setShowFeedbackModal(false);
    }
  };

  const openFeedbackPopup = (feedback) => setSelectedFeedback(feedback);
  const closeFeedbackPopup = () => setSelectedFeedback(null);

  return (
    <div className="contact-us-container">
      <div className="header-image-container">
        {/* Header image */}
      </div>

      <div className="services-container">
        <div className="service" onClick={() => navigate('/shipping-returns')}>
          <FaShippingFast className="service-icon" />
          <h3>Shipping & Returns</h3>
          <p>Track your shipped items and understand return policies.</p>
        </div>

        <div className="service" onClick={toggleFeedbackModal}>
          <FaCommentDots className="service-icon" />
          <h3>Feedback</h3>
          <p>Read customer feedback and share your own experience.</p>
        </div>

        <div className="service" onClick={toggleMap}>
          <FaStore className="service-icon" />
          <h3>Store Pickup</h3>
          <p>Find your nearest store for easy pick-up options.</p>
        </div>

        <div className="service" onClick={() => navigate('/login')}>
          <FaUserCircle className="service-icon" />
          <h3>Account</h3>
          <p>Log in to manage your account settings and preferences.</p>
        </div>

        <div className="service" onClick={togglePopup}>
          <FaPhone className="service-icon" />
          <h3>Contact Support</h3>
          <p>Need help? Call us at 9247503220 for support.</p>
        </div>

        <div className="service">
          <FaEnvelope className="service-icon" />
          <h3>Email Support</h3>
          <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
        </div>
      </div>

      {showMap && (
        <div className="map-popup">
          <div className="map-content">
            <h2 className="store">Store Location</h2>
            {/* <iframe
              src="https://www.google.com/maps/embed?..."
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}

            <GoogleMap/>
            <button onClick={toggleMap} className="pcl">Close</button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Contact Support</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your 10-digit phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
              />
              <div className="popup-buttons">
                <button type="submit" className="psub">Submit</button>
                <button type="button" onClick={togglePopup} className="pcl">Close</button>
              </div>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </div>
      )}

      {showFeedbackModal && (
        <div className="feedback-modal">
          <div className="feedback-content">
            <h2>Customer Feedback</h2>
            <div className="feedback-list">
              {feedbacks.map((feedback, index) => (
                <p key={index} className="feedback-item" onClick={() => openFeedbackPopup(feedback)}>
                  "{feedback.text}" - <strong>{feedback.username}</strong>
                </p>
              ))}
            </div>
            <form onSubmit={handleFeedbackSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              <textarea
                placeholder="Share your feedback here..."
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                required
              />
              <div className="feedback-buttons">
                <button type="submit" className="feedback-submit">Submit Feedback</button>
                <button type="button" onClick={toggleFeedbackModal} className="pcl">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedFeedback && (
        <div className="feedback-popup">
          <div className="feedback-popup-content">
            <h3>Feedback from {selectedFeedback.username}</h3>
            <p>"{selectedFeedback.text}"</p>
            <button onClick={closeFeedbackPopup} className="pcl">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;


