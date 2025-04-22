// import React, { useState } from "react";
// import "../styles/Signup.css"; // External CSS for styling

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted");
//   };

//   return (
//     <div className="signup-container">
//       <div className="progress-bar">
//         <div
//           className={`step ${step === 1 ? "active" : ""}`}
//           onClick={() => handleStepClick(1)}
//         >
//           <i className="fas fa-user"></i> Step 1
//         </div>
//         <div
//           className={`step ${step === 2 ? "active" : ""}`}
//           onClick={() => handleStepClick(2)}
//         >
//           <i className="fas fa-phone"></i> Step 2
//         </div>
//         <div
//           className={`step ${step === 3 ? "active" : ""}`}
//           onClick={() => handleStepClick(3)}
//         >
//           <i className="fas fa-envelope"></i> Step 3
//         </div>
//         <div
//           className={`step ${step === 4 ? "active" : ""}`}
//           onClick={() => handleStepClick(4)}
//         >
//           <i className="fas fa-lock"></i> Step 4
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Name</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="div">
//                 <h5>Phone Number</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Confirm Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;




// import React, { useState } from "react";
// import "../styles/Signup.css"; // External CSS for styling

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password) => {
//     return (
//       password.length > 8 &&
//       /[a-zA-Z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (!validatePassword(password)) {
//       alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//     } else if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//     } else {
//       alert("Signup successful!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="progress-bar">
//         {[1, 2, 3, 4].map((stepNumber) => (
//           <div
//             key={stepNumber}
//             className={`step ${step === stepNumber ? "active" : ""}`}
//             onClick={() => handleStepClick(stepNumber)}
//           >
//             <span className="step-number">{stepNumber}</span>
//             <span>Step {stepNumber}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Name</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="div">
//                 <h5>Phone Number</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Confirm Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;





// import React from "react";
// import { useFormik } from "formik";

// const SignUp = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   };

//   const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
//     useFormik({
//       initialValues,
//       onSubmit: (values, action) => {
//         console.log("Form Values", values);
//         action.resetForm();
//       },
//     });

//   return (
//     <div style={styles.container}>
//       <div style={styles.modal}>
//         <div style={styles.modalContainer}>
//           <div style={styles.modalLeft}>
//             <h1 style={styles.modalTitle}>Welcome!</h1>
//             <p style={styles.modalDesc}>
//               To the thapa technical website for programmers.
//             </p>
//             <form onSubmit={handleSubmit} style={styles.form}>
//               <div style={styles.inputBlock}>
//                 <label htmlFor="name" style={styles.inputLabel}>
//                   Name
//                 </label>
//                 <input
//                   type="name"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                   style={styles.inputField}
//                   value={values.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {touched.name && errors.name ? (
//                   <p style={styles.formError}>{errors.name}</p>
//                 ) : null}
//               </div>
//               <div style={styles.inputBlock}>
//                 <label htmlFor="email" style={styles.inputLabel}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   style={styles.inputField}
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.email && touched.email ? (
//                   <p style={styles.formError}>{errors.email}</p>
//                 ) : null}
//               </div>
//               <div style={styles.inputBlock}>
//                 <label htmlFor="password" style={styles.inputLabel}>
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   style={styles.inputField}
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.password && touched.password ? (
//                   <p style={styles.formError}>{errors.password}</p>
//                 ) : null}
//               </div>
//               <div style={styles.inputBlock}>
//                 <label htmlFor="confirm_password" style={styles.inputLabel}>
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirm_password"
//                   id="confirm_password"
//                   placeholder="Confirm Password"
//                   style={styles.inputField}
//                   value={values.confirm_password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.confirm_password && touched.confirm_password ? (
//                   <p style={styles.formError}>{errors.confirm_password}</p>
//                 ) : null}
//               </div>
//               <div style={styles.modalButtons}>
//                 <button type="submit" style={styles.inputButton}>
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#efedee",
//   },
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     background: "#fff",
//     width: "80vw",
//     maxWidth: "500px",
//     padding: "2rem",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   modalContainer: {
//     width: "100%",
//   },
//   modalLeft: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//   },
//   modalTitle: {
//     fontSize: "24px",
//     color: "#55311c",
//   },
//   modalDesc: {
//     fontSize: "16px",
//     color: "#6a5d5d",
//     marginBottom: "1.5rem",
//   },
//   form: {
//     width: "100%",
//   },
//   inputBlock: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: "1rem",
//     width: "100%",
//   },
//   inputLabel: {
//     fontSize: "12px",
//     color: "#8c7569",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//   },
//   inputField: {
//     padding: "0.5rem",
//     fontSize: "14px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     outline: "none",
//   },
//   formError: {
//     color: "#b22b27",
//     fontSize: "12px",
//     marginTop: "0.5rem",
//   },
//   modalButtons: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "1.5rem",
//   },
//   inputButton: {
//     padding: "0.8rem 1.5rem",
//     fontSize: "14px",
//     color: "#fff",
//     backgroundColor: "#8c7569",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// export default SignUp;





// import React, { useState } from "react";
// import styled from "styled-components";
// import { useFormik } from "formik";
// import * as Yup from "yup"; // Import Yup directly here

// // Define the validation schema here
// const signupSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email format").required("Email is required"),
//   password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//   confirm_password: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm password is required"),
// });

// const SignUp = () => {
//   const [step, setStep] = useState(1); // Track the current step

//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   };

//   const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
//     useFormik({
//       initialValues,
//       validationSchema: signupSchema,
//       onSubmit: (values) => {
//         console.log("Form Submitted", values);
//       },
//     });

//   const nextStep = () => {
//     if (step === 1 && !errors.name) setStep(step + 1);
//     if (step === 2 && !errors.email) setStep(step + 1);
//     if (step === 3 && !errors.password) setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   return (
//     <Wrapper>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           {step === 1 && (
//             <div className="input-block">
//               <label htmlFor="name" className="input-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter your name"
//                 value={values.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.name && errors.name && <p className="form-error">{errors.name}</p>}
//             </div>
//           )}

//           {step === 2 && (
//             <div className="input-block">
//               <label htmlFor="email" className="input-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.email && errors.email && <p className="form-error">{errors.email}</p>}
//             </div>
//           )}

//           {step === 3 && (
//             <div className="input-block">
//               <label htmlFor="password" className="input-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.password && errors.password && <p className="form-error">{errors.password}</p>}
//             </div>
//           )}

//           {step === 4 && (
//             <div className="input-block">
//               <label htmlFor="confirm_password" className="input-label">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 name="confirm_password"
//                 id="confirm_password"
//                 placeholder="Confirm your password"
//                 value={values.confirm_password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.confirm_password && errors.confirm_password && <p className="form-error">{errors.confirm_password}</p>}
//             </div>
//           )}

//           <div className="step-buttons">
//             {step > 1 && (
//               <button type="button" onClick={prevStep} className="input-button">
//                 Previous
//               </button>
//             )}
//             {step < 4 ? (
//               <button type="button" onClick={nextStep} className="input-button">
//                 Next
//               </button>
//             ) : (
//               <button type="submit" className="input-button">
//                 Submit
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   .container {
//     max-width: 400px;
//     margin: auto;
//     background: #fff;
//     padding: 2rem;
//     border-radius: 8px;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   }
//   .input-block {
//     margin-bottom: 1.5rem;
//   }
//   .input-label {
//     display: block;
//     font-size: 0.9rem;
//     color: #333;
//     margin-bottom: 0.5rem;
//   }
//   .input-block input {
//     width: 100%;
//     padding: 0.75rem;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     font-size: 1rem;
//   }
//   .form-error {
//     color: red;
//     font-size: 0.8rem;
//     margin-top: 0.5rem;
//   }
//   .step-buttons {
//     display: flex;
//     justify-content: space-between;
//   }
//   .input-button {
//     background-color: #4caf50;
//     color: white;
//     border: none;
//     padding: 0.75rem 1.5rem;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 1rem;
//   }
//   .input-button:disabled {
//     background-color: #ccc;
//   }
// `;

// export default SignUp;



// import React, { useState } from "react";
// import "../styles/Signup.css"; // Ensure this file exists and is properly referenced

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password) => {
//     return (
//       password.length > 8 &&
//       /[a-zA-Z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, phone, email, password, confirmPassword } = formData;

//     // Check for empty fields
//     if (!name || !phone || !email || !password || !confirmPassword) {
//       alert("All fields are required.");
//       return;
//     }

//     // Check password validity
//     if (!validatePassword(password)) {
//       alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//       return;
//     }

//     // Check password matching
//     if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     // Success alert
//     alert("You are all set! Signup successful!");
//     // Optionally reset formData after submission
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setStep(1); // Reset to the first step if needed
//   };

//   return (
//     <div className="signup-container">
//       <div className="progress-bar">
//         {[1, 2, 3, 4].map((stepNumber) => (
//           <div
//             key={stepNumber}
//             className={`step ${step === stepNumber ? "active" : ""}`}
//             onClick={() => handleStepClick(stepNumber)}
//           >
//             <span className="step-number">{stepNumber}</span>
//             <span>Step {stepNumber}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Name</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="div">
//                 <h5>Phone Number</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Confirm Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;





//  import React, { useState } from "react";
// import "../styles/Signup.css"; // External CSS for styling

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password) => {
//     return (
//       password.length >= 8 &&
//       /[a-zA-Z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (!validatePassword(password)) {
//       alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//     } else if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//     } else {
//       alert("Signup successful!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="progress-bar">
//         {[1, 2, 3, 4].map((stepNumber) => (
//           <div
//             key={stepNumber}
//             className={`step ${step === stepNumber ? "active" : ""}`}
//             onClick={() => handleStepClick(stepNumber)}
//           >
//             <span className="step-number">Step {stepNumber}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Name</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="div">
//                 <h5>Phone Number</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Confirm Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;






//  import React, { useState } from "react";
// import "../styles/Signup.css"; // External CSS for styling

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password) => {
//     return (
//       password.length >= 8 &&
//       /[a-zA-Z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (!validatePassword(password)) {
//       alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
//     } else if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//     } else {
//       alert("Signup successful!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="sidebar">
//         {[1, 2, 3, 4].map((stepNumber) => (
//           <div
//             key={stepNumber}
//             className={`step ${step === stepNumber ? "active" : ""}`}
//             onClick={() => handleStepClick(stepNumber)}
//           >
//             <span className="step-number">Step {stepNumber}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="form-content">
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <i className="fas fa-user"></i>
//               </div>
//               <div className="div">
//                 <h5>Name</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div className="div">
//                 <h5>Phone Number</h5>
//                 <input
//                   type="text"
//                   className="input"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <h5>Confirm Password</h5>
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep} >
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep} >
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import "../styles/Signup.css"; // External CSS for styling

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleStepClick = (stepNumber) => {
    setStep(stepNumber);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (!validatePassword(password)) {
      alert("Password must contain at least 8 characters, including letters, numbers, and special characters.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Signup successful!");
    }
  };

  return (
    <div className="signup-container">
      <div className="sidebar">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`step ${step === stepNumber ? "active" : ""}`}
            onClick={() => handleStepClick(stepNumber)}
          >
            <span className="step-number">Step {stepNumber}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        {step === 1 && (
          <div className="form-step fade-in">
            <h2>Step 1: Personal Details</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name" // Use placeholder instead of h5
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <i className="fas fa-phone"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  name="phone"
                  placeholder="Phone Number" // Use placeholder instead of h5
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step fade-in">
            <h2>Step 2: Contact Details</h2>
            <div className="input-div">
              <div className="i">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email" // Use placeholder instead of h5
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step fade-in">
            <h2>Step 3: Password Setup</h2>
            <div className="input-div">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password" // Use placeholder instead of h5
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  name="confirmPassword"
                  placeholder="Confirm Password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        <div className="button-group">
          {step > 1 && (
            <button type="button" className="btn prev" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 4 && (
            <button type="button" className="btn next" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 4 && (
            <button type="submit" className="btn submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;


//  import React, { useState } from "react";
//  import "../styles/Signup.css"; // External CSS for styling

// const Signup = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [passwordError, setPasswordError] = useState("");

//   const handleStepClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const nextStep = () => {
//     if (step === 3 && formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match.");
//       return;
//     }
//     setPasswordError(""); // Clear error if resolved
//     if (step < 4) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     // Clear password error as user types
//     if (e.target.name === "password" || e.target.name === "confirmPassword") {
//       setPasswordError("");
//     }
//   };

//   const validatePassword = (password) => {
//     return (
//       password.length >= 8 &&
//       /[a-zA-Z]/.test(password) &&
//       /\d/.test(password) &&
//       /[!@#$%^&*]/.test(password)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (!validatePassword(password)) {
//       alert(
//         "Password must contain at least 8 characters, including letters, numbers, and special characters."
//       );
//     } else if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//     } else {
//       alert("Signup successful!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="sidebar">
//         {[1, 2, 3, 4].map((stepNumber) => (
//           <div
//             key={stepNumber}
//             className={`step ${step === stepNumber ? "active" : ""}`}
//             onClick={() => handleStepClick(stepNumber)}
//           >
//             <span className="step-number">Step {stepNumber}</span>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="form-content">
//         {step === 1 && (
//           <div className="form-step fade-in">
//             <h2>Step 1: Personal Details</h2>
//             {/* Personal Details Input */}
//           </div>
//         )}

//         {step === 2 && (
//           <div className="form-step fade-in">
//             <h2>Step 2: Contact Details</h2>
//             {/* Contact Details Input */}
//           </div>
//         )}

//         {step === 3 && (
//           <div className="form-step fade-in">
//             <h2>Step 3: Password Setup</h2>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <input
//                   type="password"
//                   className="input"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="input-div">
//               <div className="i">
//                 <i className="fas fa-lock"></i>
//               </div>
//               <div className="div">
//                 <input
//                   type="password"
//                   className="input"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             {passwordError && (
//               <p className="error-message">{passwordError}</p>
//             )}
//           </div>
//         )}

//         <div className="button-group">
//           {step > 1 && (
//             <button type="button" className="btn prev" onClick={prevStep}>
//               Previous
//             </button>
//           )}
//           {step < 4 && (
//             <button type="button" className="btn next" onClick={nextStep}>
//               Next
//             </button>
//           )}
//           {step === 4 && (
//             <button type="submit" className="btn submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
