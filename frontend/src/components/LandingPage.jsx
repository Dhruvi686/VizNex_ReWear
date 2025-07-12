import React from 'react';
import styles from './LandingPage.module.css';
import { FaUsers, FaExchangeAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.landingBg}>
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <div className={styles.logoText}>
            <span className={styles.clyra}>C L Y R A</span>
            <span className={styles.rewear}>Rewear</span>
          </div>
        </div>
        <div className={styles.authBtns}>
          <button className={styles.loginBtn} onClick={() => navigate('/login')}>Login</button>
          <button className={styles.signupBtn} onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </header>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Welcome to ReWear</h1>
        <p className={styles.subtitle}>
          Join the sustainable fashion revolution. Swap, donate, and redeem unused clothing through our community-driven platform that reduces textile waste and promotes reuse.
        </p>
        {/* Add two large buttons here */}
        <div className={styles.landingActionBtns}>
          <button className={styles.landingLoginBtn} onClick={() => navigate('/login')}>Log In</button>
          <button className={styles.landingSignupBtn} onClick={() => navigate('/register')}>Sign Up</button>
        </div>
        <div className={styles.ctaBtns}>
          <button className={styles.startBtn} onClick={() => navigate('/register')}>Start Swapping <span>&rarr;</span></button>
          <button className={styles.browseBtn} onClick={() => navigate('/dashboard')}>Browse Items</button>
        </div>
        <section className={styles.howWorksSection}>
          <h2 className={styles.howWorksTitle}>How ReWear Works</h2>
          <div className={styles.cardsRow}>
            <div className={styles.infoCard}>
              <FaUsers className={styles.cardIcon} />
              <h3>Join Community</h3>
              <p>Register and become part of our sustainable fashion community. Connect with like-minded people.</p>
            </div>
            <div className={styles.infoCard}>
              <FaExchangeAlt className={styles.cardIcon} />
              <h3>Swap & Trade</h3>
              <p>List your unused clothes and swap with others or use our point-based redemption system.</p>
            </div>
            <div className={styles.infoCard}>
              <FaHeart className={styles.cardIcon} />
              <h3>Make Impact</h3>
              <p>Reduce textile waste, help NGOs, and contribute to a more sustainable fashion future.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage; 