// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import '../styles/Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Thrift Heaven</h1>
//       <div className="countdown">
//         <h2>Sales Countdown: 5 Days Left!</h2>
//       </div>
//       <Carousel>
//         <Carousel.Item>
//           <img className="d-block w-100" src="/images/style1.jpg" alt="First slide" />
//           <Carousel.Caption>
//             <h3>Latest Styles in Thrift Store</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="/images/style2.jpg" alt="Second slide" />
//           <Carousel.Caption>
//             <h3>Exclusive Thrift Collections</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="/images/style3.jpg" alt="Third slide" />
//           <Carousel.Caption>
//             <h3>Join Us and Sell Your Products</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import '../styles/Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Thrift Heaven</h1>
//       <div className="countdown">
//         <h2>Sales Countdown: 5 Days Left!</h2>
//       </div>

//       {/* Carousel Component */}
//       <Carousel className="carousel">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZIyo4oodevlamQ0yQuU7_fgonzXypeiagA&s"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Latest Styles in Thrift Store</h3>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Pp96RDG0EkWh65oLNFk7AkCCptMhKwXBDQ&s"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Exclusive Thrift Collections</h3>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4n7ychuxTUMbLUdnqMURxge5i-6A8HoX2g&s"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Join Us and Sell Your Products</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }


// export default Home;





// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import '../styles/Home.css';

// import image1 from '../assets/images1carousel.jpg'; // Adjust the path according to your structure
// import image2 from '../assets/images2carousel.jpg';
// import image3 from '../assets/images3carousel.jpg';

// function Home() {
//   const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60); // 5 days in seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Convert time left in seconds to days, hours, minutes, and seconds
//   const days = Math.floor(timeLeft / (24 * 60 * 60));
//   const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
//   const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="home-container">
//       <h1>Welcome to Thrift Heaven</h1>
//       <div className="countdown">
//         <h2>
//           Sales Countdown: {days}d {hours}h {minutes}m {seconds}s
//         </h2>
//       </div>

//       {/* Carousel Component */}
//       <Carousel className="carousel">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image1}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Latest Styles in Thrift Store</h3>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image2}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Exclusive Thrift Collections</h3>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image3}
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Join Us and Sell Your Products</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default Home;





// import React from 'react';
// import '../styles/Home.css';
// import image1 from '../assets/home2.webp'; // Adjust the path according to your structure
// import image2 from '../assets/home3.avif';
// import image3 from '../assets/home4.jpg';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to Thrift Heaven</h1>
//       <div className="image-grid">
//         <div className="image-card">
//           <img src={image1} alt="Thrift Item 1" className="image-zoom" />
//           <div className="image-info">
//             <h5>Thrift Item 1</h5>
//             <p>Great deals on vintage clothing!</p>
//           </div>
//         </div>
//         <div className="image-card">
//           <img src={image2} alt="Thrift Item 2" className="image-zoom" />
//           <div className="image-info">
//             <h5>Thrift Item 2</h5>
//             <p>Discover unique styles and accessories.</p>
//           </div>
//         </div>
//         <div className="image-card">
//           <img src={image3} alt="Thrift Item 3" className="image-zoom" />
//           <div className="image-info">
//             <h5>Thrift Item 3</h5>
//             <p>Limited edition items available!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import '../styles/Home.css';

// function Home() {
//   const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60); // 5 days in seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Convert time left in seconds to days, hours, minutes, and seconds
//   const days = Math.floor(timeLeft / (24 * 60 * 60));
//   const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
//   const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="home-container">
//       <h1>Welcome to Thrift Heaven</h1>
//       <div className="countdown">
//         <h2>
//           Sales Countdown: {days}d {hours}h {minutes}m {seconds}s
//         </h2>
//       </div>

//       {/* New Carousel Container */}
//       <div className="carousel-container">
//         <Carousel className="carousel">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZIyo4oodevlamQ0yQuU7_fgonzXypeiagA&s"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>Latest Styles in Thrift Store</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Pp96RDG0EkWh65oLNFk7AkCCptMhKwXBDQ&s"
//               alt="Second slide"
//             />
//             <Carousel.Caption>
//               <h3>Exclusive Thrift Collections</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4n7ychuxTUMbLUdnqMURxge5i-6A8HoX2g&s"
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Join Us and Sell Your Products</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
// import '../styles/Home.css';

// function Home() {
//   const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60); // 5 days in seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Convert time left in seconds to days, hours, minutes, and seconds
//   const days = Math.floor(timeLeft / (24 * 60 * 60));
//   const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
//   const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="home-container">
//       <div className="welcome-container">
//         <h1>Welcome to Thrift Heaven</h1>
//         <div className="countdown">
//           <h2>
//             Sales Countdown: {days}d {hours}h {minutes}m {seconds}s
//           </h2>
//         </div>
//       </div>

//       {/* Carousel Component */}
//       <div className="carousel-container">
//         <Carousel className="carousel">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZIyo4oodevlamQ0yQuU7_fgonzXypeiagA&s"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>Latest Styles in Thrift Store</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Pp96RDG0EkWh65oLNFk7AkCCptMhKwXBDQ&s"
//               alt="Second slide"
//             />
//             <Carousel.Caption>
//               <h3>Exclusive Thrift Collections</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4n7ychuxTUMbLUdnqMURxge5i-6A8HoX2g&s"
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Join Us and Sell Your Products</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Home;




// import React from 'react';
// import '../styles/Home.css';
// import image1 from '../assets/home2.webp'; // Adjust the path according to your structure
// import image2 from '../assets/home3.avif';
// import image3 from '../assets/home4.jpg';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1 className='hm'>Welcome to Thrift Heaven</h1>
//       <div className="image-grid">
//         <div className="image-card">
//           <img src={image1} alt="Thrift Item 1" className="image-zoom" />
//           <div className="image-info">
//             <h5>Wome's Collection</h5>
//             <p className='di'>Great deals on vintage clothing!</p>
//           </div>
//         </div>
//         <div className="image-card">
//           <img src={image2} alt="Thrift Item 2" className="image-zoom" />
//           <div className="image-info">
//             <h5>Men's Collection</h5>
//             <p className='di'>Discover unique styles.</p>
//           </div>
//         </div>
//         <div className="image-card">
//           <img src={image3} alt="Thrift Item 3" className="image-zoom" />
//           <div className="image-info">
//             <h5>Children's Collection</h5>
//             <p className='di'>Limited edition items available!</p>
//           </div>
//         </div>
//       </div>
//       <p className="store-info">
//         At Thrift Heaven, we believe in sustainability and style for everyone! Our curated selection of thrifted treasures attracts all ages, offering unique finds at the best prices. By reusing quality items, we not only promote eco-friendly shopping but also create a vibrant community where everyone can discover something special. Join us in our mission to make thrifting accessible and enjoyable for all!
//       </p>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';
import image1 from '../assets/home2.webp'; 
import image2 from '../assets/home3.avif';
import image3 from '../assets/home4.jpg';
import bestSeller1 from '../assets/bestseller1.jpg'; 
import bestSeller2 from '../assets/bestseller2.jpg';
import bestSeller3 from '../assets/bestseller3.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1 className='hm'>Welcome to Thrift Heaven</h1>
      <div className="image-grid">
        <div className="image-card">
          <img src={image1} alt="Thrift Item 1" className="image-zoom" />
          <div className="image-info">
            <h5>Women's Collection</h5>
            <p className='di'>Great deals on vintage clothing!</p>
          </div>
        </div>
        <div className="image-card">
          <img src={image2} alt="Thrift Item 2" className="image-zoom" />
          <div className="image-info">
            <h5>Men's Collection</h5>
            <p className='di'>Discover unique styles.</p>
          </div>
        </div>
        <div className="image-card">
          <img src={image3} alt="Thrift Item 3" className="image-zoom" />
          <div className="image-info">
            <h5>Children's Collection</h5>
            <p className='di'>Limited edition items available!</p>
          </div>
        </div>
      </div>

     
      <div className="best-sellers">
        <h2 className="best-sellers-title">Best Sellers</h2>
        <div className="image-grid">
          <div className="image-card">
            <Link to="/products"> 
              <img src={bestSeller1} alt="Best Seller 1" className="circle-image" />
            </Link>
          </div>
          <div className="image-card">
            <Link to="/products">
              <img src={bestSeller3} alt="Best Seller 2" className="circle-image" />
            </Link>
          </div>
          <div className="image-card">
            <Link to="/products">
              <img src={bestSeller2} alt="Best Seller 3" className="circle-image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
