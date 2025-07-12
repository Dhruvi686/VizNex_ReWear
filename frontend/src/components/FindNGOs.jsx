import React, { useState } from 'react';
import './FindNGOs.css';

const categories = [
  'All Categories', 'Winter Clothing', 'Kids Clothing', 'Professional Wear',
  'Casual Wear', 'Sports Apparel', 'Shoes', 'Accessories'
];
const locations = [
  'All Locations', 'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'
];

const ngos = [
  {
    name: 'Green Future Foundation',
    verified: true,
    rating: 4.8,
    donations: 1250,
    location: 'New York, NY',
    distance: '2.3 km away',
    desc: 'Dedicated to environmental sustainability through clothing recycling and community support programs.',
    phone: '+1 (555) 123-4567',
    email: 'contact@greenfuture.org',
    needs: ['Winter Coats', 'Kids Clothing', 'Professional Wear'],
    urgent: ['Winter Jackets', 'School Uniforms'],
    icon: '🌱',
    category: ['Winter Clothing', 'Kids Clothing', 'Professional Wear'],
    area: 'Manhattan'
  },
  {
    name: 'Hope & Care Community',
    verified: true,
    rating: 4.6,
    donations: 890,
    location: 'Brooklyn, NY',
    distance: '4.7 km away',
    desc: 'Supporting families in need with clothing donations and community outreach programs.',
    phone: '+1 (555) 234-5678',
    email: 'info@hopecare.org',
    needs: ['All Clothing Types', 'Shoes', 'Accessories'],
    urgent: ['Baby Clothes', 'Warm Clothing'],
    icon: '💛',
    category: ['Kids Clothing', 'Shoes', 'Accessories'],
    area: 'Brooklyn'
  },
  {
    name: 'Urban Warmth Initiative',
    verified: false,
    rating: 4.2,
    donations: 540,
    location: 'Queens, NY',
    distance: '6.1 km away',
    desc: 'Providing warm clothing and shoes to the homeless and low-income families in urban areas.',
    phone: '+1 (555) 345-6789',
    email: 'urbanwarmth@ngo.org',
    needs: ['Winter Clothing', 'Shoes'],
    urgent: ['Blankets', 'Boots'],
    icon: '🧣',
    category: ['Winter Clothing', 'Shoes'],
    area: 'Queens'
  },
  {
    name: 'Dress for Success',
    verified: true,
    rating: 4.9,
    donations: 2100,
    location: 'Manhattan, NY',
    distance: '1.8 km away',
    desc: 'Empowering women by providing professional attire and career support.',
    phone: '+1 (555) 456-7890',
    email: 'contact@dressforsuccess.org',
    needs: ['Professional Wear', 'Accessories'],
    urgent: ['Blazers', 'Handbags'],
    icon: '👗',
    category: ['Professional Wear', 'Accessories'],
    area: 'Manhattan'
  },
  {
    name: 'Kids Smile Foundation',
    verified: false,
    rating: 4.3,
    donations: 670,
    location: 'Bronx, NY',
    distance: '8.2 km away',
    desc: 'Bringing smiles to children by providing clothing, shoes, and school supplies.',
    phone: '+1 (555) 567-8901',
    email: 'hello@kidssmile.org',
    needs: ['Kids Clothing', 'Shoes', 'School Supplies'],
    urgent: ['Sneakers', 'Jackets'],
    icon: '🧒',
    category: ['Kids Clothing', 'Shoes'],
    area: 'Bronx'
  },
  {
    name: 'Sports for All',
    verified: true,
    rating: 4.5,
    donations: 980,
    location: 'Staten Island, NY',
    distance: '12.5 km away',
    desc: 'Promoting healthy lifestyles by distributing sports apparel and equipment to youth.',
    phone: '+1 (555) 678-9012',
    email: 'info@sportsforall.org',
    needs: ['Sports Apparel', 'Shoes'],
    urgent: ['Track Pants', 'Sports Shoes'],
    icon: '🏅',
    category: ['Sports Apparel', 'Shoes'],
    area: 'Staten Island'
  }
];

export default function FindNGOs() {
  const [cat, setCat] = useState('All Categories');
  const [loc, setLoc] = useState('All Locations');
  const [search, setSearch] = useState('');
  const [showDonate, setShowDonate] = useState(false);
  const [showPickup, setShowPickup] = useState(false);

  const filtered = ngos.filter(
    ngo =>
      (cat === 'All Categories' || ngo.category.includes(cat)) &&
      (loc === 'All Locations' || ngo.area === loc) &&
      (search.trim() === '' ||
        ngo.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        ngo.desc.toLowerCase().includes(search.trim().toLowerCase()))
  );

  return (
    <div className="ngo-container">
      <header className="ngo-header">
        <div className="logo-title">
          <span className="logo-clyra">CLYRA</span>
          <span className="logo-rewear">Rewear</span>
        </div>
        <h1>Nearby NGOs</h1>
      </header>
      <h2 className="ngo-title">Find NGOs Near You</h2>
      <div className="ngo-subtitle">
        Connect with local NGOs and donate your clothes to make a positive impact in your community
      </div>
      <div className="ngo-filters">
        <input className="ngo-search" placeholder="Search NGOs by name or description..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="ngo-select" value={cat} onChange={e => setCat(e.target.value)}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="ngo-select" value={loc} onChange={e => setLoc(e.target.value)}>
          {locations.map(l => <option key={l}>{l}</option>)}
        </select>
      </div>
      <div className="ngo-count">Found {filtered.length} NGOs near you</div>
      <div className="ngo-list">
        {filtered.map((ngo, idx) => (
          <div className="ngo-card" key={idx}>
            <div className="ngo-card-header">
              <span className="ngo-icon">{ngo.icon}</span>
              <span className="ngo-name">{ngo.name}</span>
              {ngo.verified && <span className="ngo-verified">Verified</span>}
              <span className="ngo-rating">❤ {ngo.rating} ({ngo.donations} donations)</span>
            </div>
            <div className="ngo-location">{ngo.location} • {ngo.distance}</div>
            <div className="ngo-desc">{ngo.desc}</div>
            <div className="ngo-contact">
              <span>📞 {ngo.phone}</span>
              <span>✉ {ngo.email}</span>
            </div>
            <div className="ngo-needs">
              <div><b>Current Needs:</b> {ngo.needs.map(n => <span className="need-tag" key={n}>{n}</span>)}</div>
              <div className="urgent-needs"><b style={{color:'#e06c9f'}}>Urgent Needs:</b> {ngo.urgent.map(u => <span className="urgent-tag" key={u}>{u}</span>)}</div>
            </div>
            <div className="ngo-actions">
              <button className="donate-btn" onClick={() => setShowDonate(true)}>Donate Now</button>
              <button className="pickup-btn" onClick={() => setShowPickup(true)}>Request Pickup</button>
            </div>
          </div>
        ))}
      </div>
      {showDonate && (
        <div className="ngo-modal">
          <div className="ngo-modal-content">
            <h3>Thank you for your interest in donating!</h3>
            <p>We will contact you soon to arrange your donation.</p>
            <button onClick={() => setShowDonate(false)}>Close</button>
          </div>
        </div>
      )}
      {showPickup && (
        <div className="ngo-modal">
          <div className="ngo-modal-content">
            <h3>Pickup Request Received!</h3>
            <p>We will arrange a pickup for your items soon.</p>
            <button onClick={() => setShowPickup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}