import React from "react";
import createAccount from "../assets/create-account.svg";
import userIcon from "../assets/user-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import password from "../assets/password-icon.svg";
import Button from "../components/Button";

export default function CreateAccount() {
  return (
    <div className="container">
      <img src={createAccount} alt="create account" className="hero-image" />
      <div className="content-box">
        <h2>Create Account</h2>
        <p>Go ahead and sign up, let everyone know how awesome you are!</p>
        <form>
          <div className="input-box">
            <img src={userIcon} alt="user icon" />
            <input type="text" placeholder="Username" className="form-input" />
          </div>
          <div className="input-box">
            <img src={emailIcon} alt="email icon" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="input-box">
            <img src={password} alt="password icon" />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="input-box">
            <img src={password} alt="Confirm password icon" />
            <input
              type="password"
              placeholder="Confirm password"
              className="form-input"
            />
          </div>
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
  );
}
