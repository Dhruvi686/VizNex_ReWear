import React, { useState } from "react";
import "./Register.css";
import logo from "../assets/image.png";

import { Link } from "react-router-dom";


const roles = ["User", "Donor", "Admin"];

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    alert("Account created!");
  };

  return (
    <div>
      <div className="register-bg">
        <div className="register-scroll-wrapper">
          <div className="register-container">
            <div className="register-logo-top">
              <img src={logo} alt="logo" className="register-logo" />
            </div>
            <h3>Join ReWear</h3>
            <p className="subtitle">
              Create your account and start making a difference
            </p>
            <form className="register-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Select Role
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose your role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </label>
              {error && <div className="error">{error}</div>}
              <button type="submit" className="register-btn">
                Create Account
              </button>
            </form>
            {/* <div className="signin-link">
              Already have an account? <a href="/HomePage">Sign In</a>
            </div> */}

            <div className="signin-link">
  Already have an account? <Link to="/HomePage">Sign In</Link>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
