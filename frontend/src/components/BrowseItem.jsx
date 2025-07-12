import React from 'react';
import './BrowseItem.css';

const items = [
  {
    image: 'https://i.imgur.com/1Q9Z1Zm.png',
    title: 'Kids Rainbow T-Shirt',
    owner: 'Lisa P.',
    desc: 'Colorful rainbow print t-shirt for kids',
    condition: 'New',
    tags: ['#Kids', '#Colorful'],
    category: 'Kids',
    size: '8Y',
    points: 10,
    rating: 5,
    likes: 8,
  },
  {
    image: 'https://i.imgur.com/2nCt3Sbl.jpg',
    title: 'Classic White Shirt',
    owner: 'John D.',
    desc: 'Professional white button-down shirt',
    condition: 'Excellent',
    tags: ['#Professional', '#Classic'],
    category: 'Men',
    size: 'L',
    points: 15,
    rating: 4.9,
    likes: 12,
  },
  {
    image: 'https://i.imgur.com/3GvwNBf.jpg',
    title: 'Floral Summer Dress',
    owner: 'Emma K.',
    desc: 'Beautiful floral pattern dress perfect for summer',
    condition: 'Good',
    tags: ['#Floral', '#Summer'],
    category: 'Summer',
    size: 'S',
    points: 20,
    rating: 4.6,
    likes: 24,
  },
];

export default function BrowseItems({ onBack }) {
  return (
    <div className="browse-container">
      <header className="browse-header">
        <button className="back-btn" onClick={onBack}>&larr; Back</button>
        <div className="logo-title">
          <span className="logo-clyra">CLYRA</span>
          <span className="logo-rewear">Rewear</span>
        </div>
        <h1>Browse Items</h1>
      </header>
      <div className="browse-search-bar">
        <input className="search-input" placeholder="Search for clothing items..." />
        <select className="sort-select">
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
        <button className="filters-btn">Filters</button>
      </div>
      <div className="browse-items-section">
        <h2>All Items</h2>
        <div className="items-count">{items.length} items found</div>
        <div className="items-grid">
          {items.map((item, idx) => (
            <div className="item-card" key={idx}>
              <img src={item.image} alt={item.title} className="item-img" />
              <div className="item-content">
                <div className="item-title">{item.title}</div>
                <div className="item-owner">by {item.owner}</div>
                <div className="item-desc">{item.desc}</div>
                <div className="item-meta">
                  <span className={`item-condition ${item.condition.toLowerCase()}`}>{item.condition}</span>
                  <span className="item-size">Size {item.size}</span>
                </div>
                <div className="item-tags">
                  {item.tags.map((tag, i) => (
                    <span className="item-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="item-category">{item.category}</div>
                <div className="item-bottom">
                  <span className="item-points">{item.points} points</span>
                  <button className="swap-btn">Swap Available</button>
                  <span className="item-rating">⭐ {item.rating}</span>
                  <span className="item-likes">♡ {item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}