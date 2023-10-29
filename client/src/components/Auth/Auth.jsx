import React, { useState } from "react";
import "./Auth.css";
import icon from "../../assests/images.png";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <>
      <section className="auth-section">
        <div className="auth-container">
          {!isSignup && (
            <img src={icon} alt="stack oveflow" className="login-logo" />
          )}
          <form>
            {isSignup && (
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input type="text" id="name" name="name" />
              </label>
            )}
            <label htmlFor="">
              <h4>Email</h4>
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="">
              <div>
                <h4>Password</h4>
                {!isSignup && <h4>Forgot Password</h4>}
              </div>
              <input type="password" name="password" id="password" />
              {isSignup && (
                <p>
                  Passwords must contain at least eight <br /> characters,
                  including at least 1 letter and 1 <br /> number
                </p>
              )}
            </label>
            {isSignup && (
              <label htmlFor="">
                <input type="checkbox" id="check" />
                <p>
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
                  terms <br /> of service
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
