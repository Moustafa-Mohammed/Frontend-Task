import React from "react";
import { Link } from "react-router-dom";
import welcomeScreen from "../assets/welcome-screen.svg";

export default function WelcomeScreen() {
  return (
    <div className="container">
      <img src={welcomeScreen} alt="welcome screen" className="hero-image" />
      <div className="content-box">
        <h1>Welcome</h1>
        <p>We’re glad you’re here! Sign up to start browing the website.</p>
        <Link to="/register">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
