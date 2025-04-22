// import React, { useState } from "react";
// import "../styles/LoginPage.css";
// import wave from "../assets/wave.png";  // Ensure these paths point to your assets
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form action="">
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                 />
//               </div>
//             </div>

//             <a href="#">Forgot Password?</a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// import React, { useState } from "react";
// import "../styles/LoginPage.css";
// import wave from "../assets/wave.png"; // Ensure these paths point to your assets
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form action="">
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#">Forgot Password?</a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from "react";
// import "../styles/LoginPage.css"; // Ensure these paths point to your assets
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     console.log("Username:", username);
//     console.log("Password:", password);
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#">Forgot Password?</a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from "react";
// import "../styles/LoginPage.css"; // Ensure these paths point to your assets
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     alert("Login Successful"); // Display login success alert
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault(); // Prevent default link action
//     alert("Verification code is sent to email"); // Display alert for password reset
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Call handleForgotPassword when clicking "Forgot Password" */}
//             <a href="#" onClick={handleForgotPassword}>
//               Forgot Password?
//             </a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from "react";
// import "../styles/LoginPage.css"; // Ensure these paths point to your assets
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     alert("Login Successful"); // Display login success alert
//     setUsername(""); // Clear username field
//     setPassword(""); // Clear password field
//     setUsernameFocus(false);
//     setPasswordFocus(false);
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault(); // Prevent default link action
//     alert("Verification code is sent to email"); // Display alert for password reset
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#" onClick={handleForgotPassword}>
//               Forgot Password?
//             </a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from "react";
// import "../styles/LoginPage.css"; // Ensure these paths point to your assets
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission

//     // Validation
//     if (!username || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (password.length < 8) {
//       alert("Invalid details: Password must be at least 8 characters long");
//       return;
//     }

//     alert("Login Successful"); // Display login success alert
//     setUsername(""); // Clear username field
//     setPassword(""); // Clear password field
//     setUsernameFocus(false);
//     setPasswordFocus(false);
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault(); // Prevent default link action
//     alert("Verification code is sent to email"); // Display alert for password reset
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#" onClick={handleForgotPassword}>
//               Forgot Password?
//             </a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// // LoginPage.js
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/LoginPage.css";
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirectPath = location.state?.from || "/";

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!username || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (password.length < 8) {
//       alert("Invalid details: Password must be at least 8 characters long");
//       return;
//     }

//     setIsAuthenticated(true);
//     alert("Login Successful");

//     navigate(redirectPath, { replace: true }); // Redirect to intended page
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault();
//     alert("Verification code is sent to email");
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#" onClick={handleForgotPassword}>
//               Forgot Password?
//             </a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/LoginPage.css";
import wave from "../assets/wave.png";
import bg from "../assets/bg.svg";
import avatar from "../assets/avatar.svg";

const LoginPage = ({ setIsAuthenticated, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  const handleFocus = (input) => {
    if (input === "username") {
      setUsernameFocus(true);
    } else if (input === "password") {
      setPasswordFocus(true);
    }
  };

  const handleBlur = (input, event) => {
    if (input === "username" && event.target.value === "") {
      setUsernameFocus(false);
    } else if (input === "password" && event.target.value === "") {
      setPasswordFocus(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!username || !password) {
      alert("All fields are required");
      return;
    }
  
   
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      alert(
        "Invalid details: Password must be at least 8 characters long, include one uppercase letter, one number, and one special character"
      );
      return;
    }
  
    setIsAuthenticated(true);
    setUser({ name: username, email: `${username}@gmail.com` }); 
    alert("Login Successful");
  
    navigate(redirectPath, { replace: true });
  };
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!username || !password) {
  //     alert("All fields are required");
  //     return;
  //   }

  //   if (password.length < 8) {
  //     alert("Invalid details: Password must be at least 8 characters long");
  //     return;
  //   }

  //   setIsAuthenticated(true);
  //   setUser({ name: username, email: `${username}@example.com` }); // Set user information correctly
  //   alert("Login Successful");

  //   navigate(redirectPath, { replace: true });
  // };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert("Verification code is sent to email");
  };

  return (
    <div>
      <img className="wave" src={wave} alt="Wave Background" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="Background" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} alt="Avatar" />
            <h2 className="title">Welcome</h2>

            <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  onFocus={() => handleFocus("username")}
                  onBlur={(e) => handleBlur("username", e)}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  onFocus={() => handleFocus("password")}
                  onBlur={(e) => handleBlur("password", e)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <a href="#" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/LoginPage.css";
// import wave from "../assets/wave.png";
// import bg from "../assets/bg.svg";
// import avatar from "../assets/avatar.svg";

// const LoginPage = ({ setIsAuthenticated, setUser }) => { // Accept setUser as a prop
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirectPath = location.state?.from || "/";

//   const handleFocus = (input) => {
//     if (input === "username") {
//       setUsernameFocus(true);
//     } else if (input === "password") {
//       setPasswordFocus(true);
//     }
//   };

//   const handleBlur = (input, event) => {
//     if (input === "username" && event.target.value === "") {
//       setUsernameFocus(false);
//     } else if (input === "password" && event.target.value === "") {
//       setPasswordFocus(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!username || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (password.length < 8) {
//       alert("Invalid details: Password must be at least 8 characters long");
//       return;
//     }

//     setIsAuthenticated(true);
//     setUser({ name: username, email: ${username}@example.com }); // Set user information
//     alert("Login Successful");

//     navigate(redirectPath, { replace: true }); // Redirect to intended page
//   };

//   const handleForgotPassword = (event) => {
//     event.preventDefault();
//     alert("Verification code is sent to email");
//   };

//   return (
//     <div>
//       <img className="wave" src={wave} alt="Wave Background" />
//       <div className="container">
//         <div className="img">
//           <img src={bg} alt="Background" />
//         </div>
//         <div className="login-content">
//           <form onSubmit={handleSubmit}>
//             <img src={avatar} alt="Avatar" />
//             <h2 className="title">Welcome</h2>

//             <div className={`input-div one ${usernameFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Username</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   onFocus={() => handleFocus("username")}
//                   onBlur={(e) => handleBlur("username", e)}
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className={`input-div pass ${passwordFocus ? "focus" : ""}`}>
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   onFocus={() => handleFocus("password")}
//                   onBlur={(e) => handleBlur("password", e)}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <a href="#" onClick={handleForgotPassword}>
//               Forgot Password?
//             </a>
//             <input type="submit" className="btn" value="Login" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;