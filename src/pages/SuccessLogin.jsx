import React from "react";
import useUser from "../context/AuthContext";
import successLogin from "../assets/success-login.svg";

export default function SuccessLogin() {
  const { user } = useUser();
  return (
    <div className="container">
      <img src={successLogin} alt="welcome screen" className="hero-image" />
      <div className="content-box">
        <h2>Successfully logged in</h2>
        <span>Your email is: {user.email}</span>
      </div>
    </div>
  );
}
