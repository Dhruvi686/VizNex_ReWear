import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { FaEnvelope, FaKey, FaMobileAlt, FaLock } from 'react-icons/fa';
import logo from '../assets/image.png';

const LoginPage = () => {
  const [method, setMethod] = useState('email');

  return (
    <div className={styles.loginBg}>
      <div className={styles.logoBox}>
        <img src={logo} alt="CLYRA Rewear" className={styles.logoImg} />
      </div>
      <h1 className={styles.welcome}>Welcome Back</h1>
      <p className={styles.subtitle}>Sign in to your ReWear account</p>
      <div className={styles.card}>
        <h2 className={styles.loginTitle}>Login</h2>
        <p className={styles.loginSubtitle}>Choose your preferred login method</p>
        <div className={styles.toggleRow}>
          <button className={method === 'email' ? styles.toggleActive : styles.toggleBtn} onClick={() => setMethod('email')}>
            <FaEnvelope style={{ marginRight: 8 }} /> Email
          </button>
          <button className={method === 'otp' ? styles.toggleActive : styles.toggleBtn} onClick={() => setMethod('otp')}>
            <FaMobileAlt style={{ marginRight: 8 }} /> OTP
          </button>
        </div>
        {method === 'email' ? (
          <form className={styles.form}>
            <label>Email
              <input type="email" placeholder="Enter your email" className={styles.input} />
            </label>
            <label>Password
              <input type="password" placeholder="Enter your password" className={styles.input} />
            </label>
            <div className={styles.forgotRow}>
              <a href="#" className={styles.forgot}>Forgot Password?</a>
            </div>
            <button type="submit" className={styles.signinBtn}><FaLock style={{ marginRight: 8 }} />Sign In</button>
          </form>
        ) : (
          <form className={styles.form}>
            <label>Phone Number
              <input type="tel" placeholder="Enter your phone number" className={styles.input} />
            </label>
            <button type="submit" className={styles.signinBtn}><FaKey style={{ marginRight: 8 }} />Send OTP</button>
          </form>
        )}
      </div>
      <div className={styles.signupRow}>
        Don&apos;t have an account? <a href="#" className={styles.signupLink}>Sign up here</a>
      </div>
    </div>
  );
};

export default LoginPage; 