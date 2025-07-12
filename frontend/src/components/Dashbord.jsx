import React from 'react';
import './Dashboard.css';

// Dummy data for listings (use network images)
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

// Dummy data for swaps
const swapHistory = [
  {
    image: 'https://images.pexels.com/photos/404168/pexels-photo-404168.jpeg?auto=compress&w=80&h=80',
    title: 'Vintage T-Shirt',
    partner: 'Alex M.',
    date: '2024-01-15',
    status: 'Completed',
    statusClass: 'completed',
  },
  {
    image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=80&h=80',
    title: 'Black Sneakers',
    partner: 'Sarah K.',
    date: '2024-01-20',
    status: 'In Progress',
    statusClass: 'inprogress',
  },
  {
    image: 'https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg?auto=compress&w=80&h=80',
    title: 'Red Sweater',
    partner: 'Mike L.',
    date: '2024-01-22',
    status: 'Pending',
    statusClass: 'pending',
  },
];

// Dummy data for notifications
const notifications = [
  { text: "Your swap request for 'Vintage T-Shirt' was accepted!", time: '2h ago' },
  { text: "Someone liked your 'Blue Denim Jacket' listing", time: '5h ago' },
  { text: "New item available in your size: 'Classic White Shirt'", time: '1d ago' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('listings');

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
              <button className={`tab${activeTab === 'listings' ? ' active' : ''}`} onClick={() => setActiveTab('listings')}>My Listings</button>
              <button className={`tab${activeTab === 'swaps' ? ' active' : ''}`} onClick={() => setActiveTab('swaps')}>My Swaps</button>
              <button className={`tab${activeTab === 'profile' ? ' active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
            </div>
            {activeTab === 'listings' && (
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
            )}
            {activeTab === 'swaps' && (
              <div className="swap-history-section">
                <h2>Swap History</h2>
                {swapHistory.map((swap, idx) => (
                  <div className="swap-item" key={idx}>
                    <img src={swap.image} alt={swap.title} className="swap-img" />
                    <div className="swap-info">
                      <div className="swap-title">{swap.title}</div>
                      <div className="swap-partner">with {swap.partner}</div>
                      <div className="swap-date">{swap.date}</div>
                    </div>
                    <span className={`swap-status ${swap.statusClass}`}>{swap.status}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'profile' && (
              <div className="profile-section">
                <div className="profile-card">
                  <div className="profile-header">
                    <span className="profile-icon">👤</span>
                    <span className="profile-title">Profile Information</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="profile-label">Full Name</span>
                    <span className="profile-value">John Doe</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="profile-label">Email</span>
                    <span className="profile-value">john.doe@example.com</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="profile-label">Phone</span>
                    <span className="profile-value">+1 (555) 123-4567</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="profile-label">Member Since</span>
                    <span className="profile-value">January 2024</span>
                  </div>
                  <button className="edit-profile-btn">
                    <span className="edit-profile-icon">⚙</span> Edit Profile
                  </button>
                </div>
              </div>
            )}
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