import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../context/AuthContext";
import createAccount from "../assets/create-account.svg";
import userIcon from "../assets/user-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import passwordIcon from "../assets/password-icon.svg";

export default function CreateAccount() {
  const userRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [apiError, setAPIError] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { username, email, password, password_confirmation } = formData;

  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [validPasswordConfirmation, setValidPasswordConfirmation] =
    useState(false);
  const [passwordConfirmationFocus, setPasswordConfirmationFocus] =
    useState(false);

  // validate username
  function validateUsername(username) {
    return /^[a-zA-Z][a-zA-Z0-9][a-zA-Z]{3,13}$/.test(username);
  }

  function validateEmail(email) {
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    return validateEmailRegex.test(email);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    try {
      const response = await fetch(
        "https://goldblv.com/api/hiring/tasks/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const user = await response.json();
        setUser(user);
        navigate("/successful-login");
      } else if (!response.ok) {
        const err = await response.json();
        setAPIError(err);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(validateUsername(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(password.length > 7);
    const match = password === password_confirmation;
    setValidPasswordConfirmation(match);
  }, [password, password_confirmation]);

  return (
    <div className="container">
      <img src={createAccount} alt="create account" className="hero-image" />
      <div className="content-box">
        <h2>Create Account</h2>
        <p>Go ahead and sign up, let everyone know how awesome you are!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="input-box" htmlFor="username">
              <img src={userIcon} alt="user icon" />
              <input
                required
                ref={userRef}
                className="form-input"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
              />
            </label>

            <p
              className={`${
                username && !usernameFocus && !validUsername
                  ? "error"
                  : "hidden"
              }`}
            >
              Username must be at between 5 to 15 characters and must not start
              or end with numbers
            </p>
            {apiError ? (
              <p className="error">{apiError.errors.username}</p>
            ) : null}
          </div>
          <div>
            <label className="input-box" htmlFor="email">
              <img src={emailIcon} alt="email icon" />
              <input
                required
                className="form-input"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </label>

            <p
              className={`${
                email && !emailFocus && !validEmail ? "error" : "hidden"
              }`}
            >
              email must be in valid format: "example@some.com"
            </p>
            {apiError ? <p className="error">{apiError.errors.email}</p> : null}
          </div>

          <div>
            <label className="input-box" htmlFor="password">
              <img src={passwordIcon} alt="password icon" />
              <input
                required
                className="form-input"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
            </label>

            <p
              className={`${
                password && !passwordFocus && !validPassword
                  ? "error"
                  : "hidden"
              }`}
            >
              Password must be at least 8 characters
            </p>
            {apiError ? (
              <p className="error">{apiError.errors.password}</p>
            ) : null}
          </div>
          <div>
            <label className="input-box" htmlFor="password_confirmation">
              <img src={passwordIcon} alt="Confirm password icon" />
              <input
                required
                className="form-input"
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                onFocus={() => setPasswordConfirmationFocus(true)}
                onBlur={() => setPasswordConfirmationFocus(false)}
              />
            </label>
            <p
              className={`${
                password_confirmation &&
                !passwordConfirmationFocus &&
                !validPasswordConfirmation
                  ? "error"
                  : "hidden"
              }`}
            >
              Password fields should match
            </p>
          </div>

          <button
            className="btn"
            type="submit"
            onClick={handleSubmit}
            disabled={
              !validUsername ||
              !validEmail ||
              !validPassword ||
              !validPasswordConfirmation
            }
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
