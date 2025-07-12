import React from 'react';
import './Dashbord.css';

const listedItems = [
  {
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    title: 'Blue Denim Jacket',
    status: 'Active',
    views: 23,
    likes: 5,
    statusClass: 'active',
  },
  {
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    title: 'Summer Floral Dress',
    status: 'Swapped',
    views: 18,
    likes: 8,
    statusClass: 'swapped',
  },
  {
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    title: 'Winter Coat',
    status: 'Pending',
    views: 12,
    likes: 3,
    statusClass: 'pending',
  },
];

const notifications = [
  { text: "Your swap request for 'Vintage T-Shirt' was accepted!", time: '2h ago' },
  { text: "Someone liked your 'Blue Denim Jacket' listing", time: '5h ago' },
  { text: "New item available in your size: 'Classic White Shirt'", time: '1d ago' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-title">
          <div className="logo">
            <span className="logo-clyra">CLYRA</span>
            <span className="logo-rewear">Rewear</span>
          </div>
          <h1>Dashboard</h1>
        </div>
        <div className="header-actions">
          <button className="add-item-btn">+ Add Item</button>
          <span className="bell-icon">🔔</span>
        </div>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-cards">
          <div className="dashboard-card">
            <div className="card-label">Points Balance</div>
            <div className="card-value">125 <span className="star-icon">★</span></div>
          </div>
          <div className="dashboard-card">
            <div className="card-label">My Listings</div>
            <div className="card-value">3 <span className="cube-icon">🧊</span></div>
          </div>
          <div className="dashboard-card">
            <div className="card-label">Total Swaps</div>
            <div className="card-value">3 <span className="swap-icon">🔄</span></div>
          </div>
          <div className="dashboard-card">
            <div className="card-label">Impact Score</div>
            <div className="card-value">4.8 <span className="impact-icon">📈</span></div>
          </div>
        </section>
        <section className="dashboard-content">
          <div className="dashboard-left">
            <div className="dashboard-tabs">
              <button className="tab active">My Listings</button>
              <button className="tab">My Swaps</button>
              <button className="tab">Profile</button>
            </div>
            <div className="listed-items-section">
              <h2>Your Listed Items</h2>
              {listedItems.map((item, idx) => (
                <div className="listed-item" key={idx}>
                  <img src={item.image} alt={item.title} className="item-img" />
                  <div className="item-info">
                    <div className="item-title">{item.title}</div>
                    <span className={`item-status ${item.statusClass}`}>{item.status}</span>
                    <span className="item-views">{item.views} views</span>
                    <span className="item-likes">{item.likes} likes</span>
                  </div>
                  <button className="view-btn">View</button>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-right">
            <div className="notifications-section">
              <h2>Notifications</h2>
              <div className="notifications-list">
                {notifications.map((note, idx) => (
                  <div className="notification" key={idx}>
                    <div>{note.text}</div>
                    <div className="notification-time">{note.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="quick-actions-section">
              <h2>Quick Actions</h2>
              <button className="quick-action-btn">+ List New Item</button>
              <button className="quick-action-btn">Find NGO</button>
              <button className="quick-action-btn">Browse Items</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;