// // AboutUs.js
// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css';
// import thriftStoreImage from '../assets/jacket1.png'; // Replace with the path to your image

// const AboutUs = () => {
//     const textContent = [
//         "Welcome to our Thrift Store!",
//         "We are dedicated to providing quality, affordable, and unique items.",
//         "Our goal is to reduce waste and give items a second life.",
//         "Join us in making a sustainable choice today!"
//     ];

//     const [displayedText, setDisplayedText] = useState([]);

//     useEffect(() => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setDisplayedText((prev) => [...prev, textContent[index]]);
//             index++;
//             if (index === textContent.length) {
//                 clearInterval(interval);
//             }
//         }, 1000); // Adjust the interval as desired for line-by-line loading
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="about-container">
//             <div className="about-image">
//                 <img src={thriftStoreImage} alt="Thrift Store" />
//             </div>
//             <div className="about-content">
//                 {displayedText.map((line, idx) => (
//                     <p key={idx}>{line}</p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AboutUs;




// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Make sure to import the CSS file
// import jacketImage from '../assets/jacket1.png';

// const AboutUs = () => {
//   const [text, setText] = useState("");
//   const fullText = `Welcome to our Thrift Store! Here, you will find a wide variety of gently used items 
//   that are both affordable and eco-friendly. Our mission is to promote sustainability 
//   by encouraging the reuse of items. Every purchase helps support our community and 
//   reduces waste. Join us in making a difference while finding unique treasures!`;

//   useEffect(() => {
//     const words = fullText.split(" ");
//     let index = 0;
    
//     const interval = setInterval(() => {
//       if (index < words.length) {
//         setText(prev => prev + (index === 0 ? '' : ' ') + words[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 200); // Change this value to adjust typing speed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <img src={jacketImage} alt="Thrift Store" className="cutting-image" />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;




// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Ensure the CSS file is imported
// import jacketImage from '../assets/dress1.jpg'; // Adjust the path according to your structure

// const AboutUs = () => {
//   const [text, setText] = useState("");
//   const fullText = `Welcome to our Thrift Store! Here, you will find a wide variety of gently used items 
//   that are both affordable and eco-friendly. Our mission is to promote sustainability 
//   by encouraging the reuse of items. Every purchase helps support our community and 
//   reduces waste. Join us in making a difference while finding unique treasures!`;

//   useEffect(() => {
//     const words = fullText.split(" ");
//     let index = 0;
    
//     const interval = setInterval(() => {
//       if (index < words.length) {
//         setText(prev => prev + (index === 0 ? '' : ' ') + words[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 200); // Adjust typing speed here

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <img src={jacketImage} alt="Thrift Store" className="cutting-image" />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css';

// const AboutUs = ({
//   image,
//   title,
//   subtitle,
//   description,
//   onProfile,
//   onFollow,
// }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const lines = description.split("\n"); // Split description into lines
//   const [lineIndex, setLineIndex] = useState(0);

//   useEffect(() => {
//     if (lineIndex < lines.length) {
//       const timeoutId = setTimeout(() => {
//         setDisplayedText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]);
//         setLineIndex(lineIndex + 1);
//       }, 2000); // Adjust this value for speed between lines
//       return () => clearTimeout(timeoutId);
//     }
//   }, [lineIndex, lines]);

//   return (
//     <div className="card">
//       <img src={image} alt={title} />
//       <div>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>{displayedText}</p>
//         <div className="buttons">
//           <button onClick={onProfile}>Profile</button>
//           <button onClick={onFollow} className="primary">Follow</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Make sure the path is correct
// import jacketImage from '../assets/dress1.jpg'; // Adjust the path according to your structure

// const AboutUs = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const fullText = `Welcome to our Thrift Store! Here, you will find a wide variety of gently used items 
//   that are both affordable and eco-friendly. Our mission is to promote sustainability 
//   by encouraging the reuse of items. Every purchase helps support our community and 
//   reduces waste. Join us in making a difference while finding unique treasures!`;

//   useEffect(() => {
//     const lines = fullText.split("\n");
//     let lineIndex = 0;

//     const interval = setInterval(() => {
//       if (lineIndex < lines.length) {
//         setDisplayedText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]);
//         lineIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 2000); // Adjust this value to control the speed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <img src={jacketImage} alt="Thrift Store" className="cutting-image" />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{displayedText}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Ensure the CSS file is imported
// import jacketImage from '../assets/dress1.jpg'; // Adjust the path according to your structure

// const AboutUs = () => {
//   const [text, setText] = useState("");
//   const fullText = `Welcome to Thrift Heaven!

// At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.

// Our Story
// Founded in 2024, [Your Thrift Store Name] started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, 
// we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.
// Why Choose Us?
// Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.

// Unique Finds: Our store is filled with one-of-a-kind items that tell a story. From vintage clothing to rare collectibles, you're sure to find something special that reflects your personal style.

// Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.

// Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank
// Get in Touch
// We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us (details are mentioned in countact us page). Follow us  to stay updated on our latest arrivals and events.`;


//   useEffect(() => {
//     const lines = fullText.split('\n'); // Split the text into lines
//     let lineIndex = 0;

//     const interval = setInterval(() => {
//       if (lineIndex < lines.length) {
//         setText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]);
//         lineIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 2000); // Change this value to adjust line loading speed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <img src={jacketImage} alt="Thrift Store" className="cutting-image" />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Ensure the CSS file is imported
// import jacketImage from '../assets/dress1.jpg'; // Adjust the path according to your structure

// const AboutUs = () => {
//   const [text, setText] = useState("");
//   const fullText = `Welcome to Thrift Heaven!

// At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.

// Our Story
// Founded in 2024, Thrift Heaven started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.

// Why Choose Us?
// Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.

// Unique Finds: Our store is filled with one-of-a-kind items that tell a story. From vintage clothing to rare collectibles, you're sure to find something special that reflects your personal style.

// Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.

// Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank.

// Get in Touch
// We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us. Follow us to stay updated on our latest arrivals and events.`;

//   useEffect(() => {
//     const lines = fullText.split('\n'); // Split the text into lines
//     let lineIndex = 0;

//     const interval = setInterval(() => {
//       if (lineIndex < lines.length) {
//         setText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]); // Add line by line
//         lineIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 2500); // Adjust this value to control line loading speed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <img src={jacketImage} alt="Thrift Store" className="cutting-image" />
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;




// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css'; // Ensure the CSS file is imported
// import jacketImage from '../assets/dress1.jpg'; // Existing image
// import newImage from '../assets/aboutus.png'; // New image (update the path as necessary)

// const AboutUs = () => {
//   const [text, setText] = useState("");
//   const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded
//   const fullText = `Welcome to Thrift Heaven!

// At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.

// Our Story
// Founded in 2024, [Your Thrift Store Name] started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, 
// we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.
// Why Choose Us?
// Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.

// Unique Finds: Our store is filled with one-of-a-kind items that tell a story. From vintage clothing to rare collectibles, you're sure to find something special that reflects your personal style.

// Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.

// Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank
// Get in Touch
// We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us (details are mentioned in countact us page). Follow us  to stay updated on our latest arrivals and events.`;

//   useEffect(() => {
//     const lines = fullText.split('\n'); // Split the text into lines
//     let lineIndex = 0;

//     const interval = setInterval(() => {
//       if (lineIndex < lines.length) {
//         setText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]);
//         lineIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 2000); // Change this value to adjust line loading speed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <div className={`image-container ${imagesLoaded ? 'loaded' : ''}`}>
//         <img 
//           src={newImage} 
//           alt="New Item" 
//           className="new-image" 
//           onLoad={() => setImagesLoaded(true)} 
//         />
//         <img 
//           src={jacketImage} 
//           alt="Thrift Store" 
//           className="cutting-image" 
//           onLoad={() => setImagesLoaded(true)} 
//         />
//       </div>
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React, { useEffect, useState } from 'react';
import '../styles/AboutUs.css'; 
import jacketImage from '../assets/dress1.jpg'; 
import newImage from '../assets/aboutus.png'; 

const AboutUs = () => {
  const [text, setText] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded
  const fullText = `Welcome to Thrift Heaven!

At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.

Our Story
Founded in 2024, Thrift Heaven started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, 
we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.

Why Choose Us?
Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.

Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.

Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank

Get in Touch
We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us (details are mentioned in countact us page). `;

  useEffect(() => {
    const lines = fullText.split('\n');
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        setText(prev => prev + (prev ? '\n' : '') + lines[lineIndex]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="about-container">
      <div className={`image-container ${imagesLoaded ? 'loaded' : ''}`}>
        <img 
          src={newImage} 
          alt="New Item" 
          className="new-image" 
          onLoad={() => setImagesLoaded(true)} 
        />
        <img 
          src={jacketImage} 
          alt="Thrift Store" 
          className="cutting-image" 
          onLoad={() => setImagesLoaded(true)} 
        />
      </div>
      <div className="about-content">
        <h2 className='abt'>About Us</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutUs;




// import React, { useEffect, useState } from 'react';
// import '../styles/AboutUs.css';
// import jacketImage from '../assets/dress1.jpg';
// import overlayImage from '../assets/aboutus.png'; // Import the second image

// const AboutUs = () => {
//   const [text, setText] = useState('');
//   const [imageLoad, setImageLoad] = useState(false); // State to control image loading
//   const fullText = `Welcome to Thrift Heaven!

// At Thrift Heaven, we believe in the power of sustainability and the joy of discovery. Our mission is to provide a vibrant platform where individuals can buy and sell gently used products, allowing them to give their items a second life while finding unique treasures at affordable prices.

// Our Story
// Founded in 2024, [Your Thrift Store Name] started as a small community initiative aimed at promoting sustainability and reducing waste. We saw a need for a space where people could come together to buy, sell, and trade pre-loved items, and thus, our thrift store was born. Since then, 
// we have grown into a thriving marketplace that connects sellers and buyers from all walks of life.
// Why Choose Us?
// Sustainable Shopping: Every purchase you make contributes to a more sustainable future. By choosing second-hand products, you're helping to reduce waste and minimize the environmental impact of consumerism.

// Unique Finds: Our store is filled with one-of-a-kind items that tell a story. From vintage clothing to rare collectibles, you're sure to find something special that reflects your personal style.

// Support Local Sellers: When you shop with us, you're supporting local sellers and artisans. We empower individuals to sell their products, creating a vibrant community of creators and shoppers.

// Affordable Prices: We believe that quality shouldn't come at a high price. Our products are priced fairly, making it easy for everyone to find what they need without breaking the bank.
// Get in Touch
// We love hearing from our customers! If you have any questions, suggestions, or just want to say hi, feel free to contact us (details are mentioned in the contact us page). Follow us to stay updated on our latest arrivals and events.`;

//   useEffect(() => {
//     const lines = fullText.split('\n').filter(Boolean); // Filter out empty lines
//     let lineIndex = 0;

//     const interval = setInterval(() => {
//       if (lineIndex < lines.length) {
//         setText((prev) => prev + (prev ? '\n' : '') + lines[lineIndex]);
//         lineIndex++;
//       } else {
//         clearInterval(interval);
//         setImageLoad(true); // Trigger image loading after text is fully loaded
//       }
//     }, 1500); // Adjust this value for smoothness

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="about-container">
//       <div className={`image-container ${imageLoad ? 'show' : ''}`}>
//         <img src={overlayImage} alt="Overlay" className="overlay-image" />
//         <img src={jacketImage} alt="Thrift Store" className="base-image" />
//       </div>
//       <div className="about-content">
//         <h2>About Us</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
