import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Signup } from "./SignUp"; // Import the Signup component
import "./Signin.css"; // Import the CSS file for styling
export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSignup, setShowSignup] = useState(false); // State to manage sign-up popup
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Sign in logic
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      setError("Authentication failed. Please check your credentials.");
      console.log(error);
    }
  };
  const closeSignupPopup = () => {
    setShowSignup(false);
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn} className="signin-form">
        <input
          className="signin-input"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          className="signin-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      <div className="signin-options">
        <p>
          Forgot your password?{" "}
          <Link
            to="/forgot-password"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Reset here
          </Link>
        </p>
        <hr />
        <button
          style={{
            width: "160px",
            height: "4vh",
            backgroundColor: "#28a745",
            textAlign: "center",
            border: "none",
            outline: "none",
            borderRadius: "6px",
            marginLeft: "115px",
          }}
          onClick={() => setShowSignup(true)}
        >
          Create account
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {showSignup && (
        <div className="popup-container">
          <div className="popup">
            <Signup onClose={closeSignupPopup} />
          </div>
        </div>
      )}
    </div>
  );
};
