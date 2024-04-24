import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css"; // Import the CSS file for styling

export function Signup({ onClose }) {
  // Accept onClose prop
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    const emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const isEmailValid = emailRegex.test(email);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (isEmailValid && isPasswordValid && password === confirmPassword) {
      // Additional validation can be added for other fields
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setLoading(false);
          console.log(user);
          onClose();
        })
        .catch((error) => {
          setLoading(false);
          setError("Error signing up. Please try again.");
          console.log(error);
        });
    } else {
      setLoading(false);
      alert("Invalid email or password");
    }
  }
  return (
    <div className="signup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          X
        </button>{" "}
        {/* Close button inside the popup */}
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp} className="signup-form">
          <div className="form-row">
            <input
              className="signup-input half-width"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              className="signup-input half-width"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="signup-input full-width"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="signup-input full-width"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            className="signup-input full-width"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
          <div className="form-row">
            <input
              className="signup-input third-width"
              onChange={(e) => setDay(e.target.value)}
              type="number"
              min="1"
              max="31"
              placeholder="Day"
            />
            <input
              className="signup-input third-width"
              onChange={(e) => setMonth(e.target.value)}
              type="text"
              placeholder="Month"
            />
            <input
              className="signup-input third-width"
              onChange={(e) => setYear(e.target.value)}
              type="number"
              min="1990"
              max="2024"
              placeholder="Year"
            />
          </div>
          <div className="form-row">
            {" "}
            <select
              className="signup-input full-width"
              onChange={(e) => setGender(e.target.value)}
              defaultValue=""
            >
              {" "}
              <option value="" disabled hidden>
                Gender
              </option>{" "}
              <option value="male">Male</option>{" "}
              <option value="female">Female</option>{" "}
              <option value="other">Other</option>{" "}
            </select>{" "}
          </div>
          <div className="form-row">
            {" "}
            <select
              className="signup-input third-width"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>{" "}
              <option value="India">India</option>
              <option value="America">America</option>{" "}
              <option value="Cannada">Canada</option>
              <option value="SingaPore">SingaPore</option>{" "}
              <option value="South Africa">South Africa</option>
              {/* Add more country options here */}
            </select>
            <select
              className="signup-input third-width"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>{" "}
              <option value="Delhi">Delhi</option>
              <option value="California">California</option>{" "}
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>{" "}
              <option value="Banglore">Banglore</option>
              {/* Add more state options here */}
            </select>
            <input
              className="signup-input third-width"
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="additional-info">
            {" "}
            <p>
              People who use our service may have uploaded your contact
              information to Lzycrazy. <a href="#">Learn more.</a>
            </p>{" "}
            <p>
              By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>
              . You may receive SMS notifications from us and can opt out at any
              time.
            </p>{" "}
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>{" "}
        </form>{" "}
        {loading && <p>Loading...</p>}{" "}
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      </div>{" "}
    </div>
  );
}
