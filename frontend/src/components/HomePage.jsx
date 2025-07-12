// HomePage.jsx
import React from 'react';
import './HomePage.css';
import {
  FaLeaf,
  FaUsers,
  FaMapMarkerAlt,
  FaTshirt,
  FaBriefcase,
  FaChild,
  FaCrown,
  FaShoePrints,
  FaStar
} from 'react-icons/fa';
import img2 from '../assets/img2.jpg';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">💜 ReWear</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Browse</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Dashboard</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      <div className="main-container">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to <span className="highlight">ReWear</span></h1>
            <p>
              Exchange or donate your clothes to help those in need. We connect users,
              NGOs, and governments to create a sustainable and caring society.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Start Swapping →</button>
              <button className="secondary-btn">Browse Items</button>
            </div>
            <div className="features">
              <div><FaLeaf className="icon" /><div className="title">Sustainable</div><div>Eco-friendly</div></div>
              <div><FaUsers className="icon" /><div className="title">Community</div><div>Helping others</div></div>
              <div><FaMapMarkerAlt className="icon" /><div className="title">Local</div><div>Drop points</div></div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={img2}
              alt="clothing store"
            />
          </div>
        </section>

        <section className="categories">
          <h2>Browse by Category</h2>
          <p>Find exactly what you're looking for or discover something new in our diverse collection</p>
          <div className="category-list">
            <div className="category-card blue">
              <FaTshirt className="icon" />
              <div className="title">Casual Wear</div>
              <div className="desc">1,234 items</div>
            </div>
            <div className="category-card purple">
              <FaBriefcase className="icon" />
              <div className="title">Formal Wear</div>
              <div className="desc">567 items</div>
            </div>
            <div className="category-card pink">
              <FaChild className="icon" />
              <div className="title">Kids Clothing</div>
              <div className="desc">890 items</div>
            </div>
            <div className="category-card yellow">
              <FaCrown className="icon" />
              <div className="title">Traditional</div>
              <div className="desc">345 items</div>
            </div>
            <div className="category-card green">
              <FaShoePrints className="icon" />
              <div className="title">Footwear</div>
              <div className="desc">678 items</div>
            </div>
            <div className="category-card indigo">
              <FaStar className="icon" />
              <div className="title">Accessories</div>
              <div className="desc">456 items</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
