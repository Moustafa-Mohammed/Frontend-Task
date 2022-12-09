import React from "react";
import successLogin from "../assets/success-login.svg";

export default function SuccessLogin() {
  return (
    <div className="container">
      <img src={successLogin} alt="welcome screen" className="hero-image" />
      <div className="content-box">
        <h2>Successfully logged in</h2>
        <span>User@gmail.com</span>
      </div>
    </div>
  );
}
