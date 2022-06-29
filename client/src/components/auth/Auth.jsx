import React, { useState } from "react";
import img from "../../images/google.png";
import "../../css/auth.css";

const Auth = () => {
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <div className="auth-box flex-css">
      <div className="account-box">
        <div className="title pb-2">
          <h1>{registerForm ? "Welcome" : "Log In"}</h1>
          {registerForm ? (
            <p>
              Sign Up to join our <br />
              football media
            </p>
          ) : (
            <p>
              Welcome to our <br />
              football media
            </p>
          )}
        </div>
        {registerForm && (
          <div className="input-row">
            <div className="input-box">
              <label>First Name</label> <br />
              <input type="text" />
            </div>
          </div>
        )}

        {registerForm && (
          <div className="input-row">
            <div className="input-box">
              <label>Last Name</label> <br />
              <input type="text" />
            </div>
          </div>
        )}

        <div className="input-row">
          <div className="input-box">
            <label>Email</label> <br />
            <input type="email" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-box">
            <label>Password</label> <br />
            <input type="password" />
          </div>
        </div>
        <div className="btn-container">
          <button>{registerForm ? "Submit" : "Log In"}</button>
        </div>
        <div className="google-btn flex-css-row my-4">
          <img src={img} alt="google" />
          <p>Sign in with Google </p>
        </div>
        <div className="note-text flex-css-row">
          <p>
            {registerForm ? "Already have account?" : "Don't have an account?"}
          </p>
          <span onClick={() => setRegisterForm((prev) => !registerForm)}>
            {registerForm ? "Login" : "Register"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
