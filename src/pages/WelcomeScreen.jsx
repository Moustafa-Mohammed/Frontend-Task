import React from "react";
import welcomeScreen from "../assets/welcome-screen.svg";
import Button from "../components/Button";

export default function WelcomeScreen() {
  return (
    <div className="container">
      <img src={welcomeScreen} alt="welcome screen" className="hero-image" />
      <div className="content-box">
        <h1>Welcome</h1>
        <p>We’re glad you’re here! Sign up to start browing the website.</p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
