import React, { useState, useRef } from 'react';
import './ListNewItem.css';

const categories = ['Men', 'Women', 'Kids', 'Winter', 'Summer'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const conditions = ['New', 'Like New', 'Good', 'Fair', 'Used'];
const types = ['Shirt', 'Pants', 'Dress', 'Jacket', 'Sweater', 'Shoes', 'Accessories'];

export default function ListNewItem({ onBack }) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const fileInput = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleTagAdd = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div className="list-item-container">
      <header className="list-item-header">
        <button className="back-btn" onClick={onBack}>&larr; Back</button>
        <div className="logo-title">
          <span className="logo-clyra">CLYRA</span>
          <span className="logo-rewear">Rewear</span>
        </div>
        <h1>List New Item</h1>
      </header>
      <div className="list-item-form-wrapper">
        <form className="list-item-form" onSubmit={e => e.preventDefault()}>
          <h2>Add New Item</h2>
          <div className="form-subtitle">List your clothing item for swapping or point redemption</div>
          <label className="form-label">Upload Images *</label>
          <div
            className="img-upload-area"
            onClick={() => fileInput.current.click()}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
          >
            {image ? (
              <img src={image} alt="Preview" className="img-preview" />
            ) : (
              <div className="img-upload-placeholder">
                <span role="img" aria-label="upload" style={{ fontSize: 48, color: '#a59fc6' }}>🖼</span>
                <div>Click to upload images or drag and drop</div>
                <div className="img-upload-note">PNG, JPG up to 10MB each</div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInput}
              onChange={handleImageUpload}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                className="form-input"
                placeholder="e.g., Vintage Denim Jacket"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category *</label>
              <select
                className="form-input"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              className="form-input"
              placeholder="Describe your item in detail..."
              value={desc}
              onChange={e => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Type *</label>
              <select
                className="form-input"
                value={type}
                onChange={e => setType(e.target.value)}
                required
              >
                <option value="">Clothing type</option>
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Size *</label>
              <select
                className="form-input"
                value={size}
                onChange={e => setSize(e.target.value)}
                required
              >
                <option value="">Select size</option>
                {sizes.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Condition *</label>
              <select
                className="form-input"
                value={condition}
                onChange={e => setCondition(e.target.value)}
                required
              >
                <option value="">Item condition</option>
                {conditions.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Tags</label>
            <div className="tags-input-row">
              <input
                className="form-input"
                placeholder="Add a tag..."
                value={tagInput}
                onChange={e => setTagInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? (e.preventDefault(), handleTagAdd()) : null}
              />
              <button type="button" className="add-tag-btn" onClick={handleTagAdd}>+</button>
            </div>
            <div className="tags-list">
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  #{tag}
                  <button type="button" className="remove-tag-btn" onClick={() => handleTagRemove(tag)}>×</button>
                </span>
              ))}
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onBack}>Cancel</button>
            <button type="submit" className="list-btn">List Item</button>
          </div>
        </form>
      </div>
    </div>
  );
}