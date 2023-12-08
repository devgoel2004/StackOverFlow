import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import icon from "../../assests/icon.png";
import { signUp, login } from "../../actions/auth";
import toast from "react-hot-toast";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        return toast.error("Enter a name to continue");
      }
      dispatch(signUp({ name, email, password }, navigate));
      toast.success("Redirecting...");
      toast.success("User registered successfully");
      toast.success("Logged in successfully");
    } else {
      dispatch(login({ email, password }, navigate));
      toast.success("Redirecting");
      toast.success("Logged in successfully");
    }
  };
  return (
    <>
      <section className="auth-section">
        {isSignup && <AboutAuth />}
        <div className="auth-container-2">
          <form onSubmit={handleSubmit}>
            {!isSignup && (
              <img src={icon} alt="stack oveflow" className="login-logo" />
            )}
            {isSignup && (
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </label>
            )}
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="password">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <h4>Password</h4>
                {isSignup && (
                  <p style={{ color: "#007ac6", fontSize: "13px" }}>
                    forget password?
                  </p>
                )}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            {isSignup && (
              <label htmlFor="">
                <input type="checkbox" id="check" />
                <p style={{ fontSize: "13px" }}>
                  Opt-in to recieve occasional,
                  <br />
                  product updates, user research ivitations,
                </p>
                company announcements, and digests.
              </label>
            )}
            <button type="submit" className="auth-btn">
              {isSignup ? "Signup" : "Login"}
            </button>
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking "Sign Up", you agree to our{" "}
                <span style={{ color: "#007ac6" }}>
                  terms of <br /> service
                </span>
                ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
                <span style={{ color: "#007ac6" }}> cookie policy </span>
              </p>
            )}
          </form>
          <p>
            {isSignup ? "already have an Account ?" : "Don't have an Account?"}
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handleSwitch}>
              {isSignup ? "Login" : "Signup"}
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Auth;
