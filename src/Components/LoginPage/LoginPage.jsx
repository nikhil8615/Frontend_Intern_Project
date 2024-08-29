import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login-popup">
      <div className="login-pop-img">{/* <img src={img} alt="" /> */}</div>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button onClick={() => setShowLogin(false)}>x</button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" />
          )}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
