import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import './Admin.css';

export default function AdminPage() {
  const { 
    products, addProduct, removeProduct, 
    galleryImages, addGalleryImage, removeGalleryImage,
    collections, addImageToCollection, removeImageFromCollection 
  } = useProducts();
  
  const [dest, setDest] = useState('brand'); // 'brand', 'gallery'
  const [brandId, setBrandId] = useState('nitco-cera');
  const [expandedBrand, setExpandedBrand] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', brands: '', desc: '', img: '', tag: '', path: '#'
  });
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB Limit for localStorage
        alert('File is too large! Please choose an image smaller than 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.img) {
      alert('Please upload an image first!');
      return;
    }

    if (dest === 'brand') {
      addImageToCollection(brandId, formData.img);
      alert(`Added to ${brandId} collection!`);
    } else if (dest === 'gallery') {
      addGalleryImage({ src: formData.img, alt: formData.title, span: '' });
      alert('Added to Design Gallery!');
    }

    setFormData({ title: '', brands: '', desc: '', img: '', tag: '', path: '#' });
    // Reset file input
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  const totalBrandImages = collections.reduce((acc, col) => acc + 1 + col.extraImages.length, 0);
  const totalWebsiteImages = totalBrandImages + galleryImages.length;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin <span className="gold">Control Center</span></h1>
        <p>Choose where you want to add your new images</p>
      </div>

      <div className="admin-grid">
        {/* Step-by-Step Form */}
        <div className="admin-card">
          <h2>1. Select Destination</h2>
          <div className="dest-selector">
            <button className={`dest-btn ${dest === 'brand' ? 'active' : ''}`} onClick={() => setDest('brand')}>Featured Brand (Tabs)</button>
            <button className={`dest-btn ${dest === 'gallery' ? 'active' : ''}`} onClick={() => setDest('gallery')}>Design Gallery</button>
          </div>

          <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
            {dest === 'brand' && (
              <div className="form-group animate-fade">
                <label>Select Brand Tab</label>
                <select value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                  {collections.map(c => <option key={c.id} value={c.id}>{c.tab}</option>)}
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Upload Image</label>
              <div className="upload-box">
                <input 
                  id="file-upload"
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="file-input"
                />
                {formData.img && (
                  <div className="upload-preview animate-fade">
                    <img src={formData.img} alt="Preview" />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="admin-btn" disabled={!formData.img}>
              Confirm & Add Image
            </button>
          </form>
        </div>

        {/* Status Section */}
        <div className="admin-card">
          <h2>Current Overview</h2>
          <div className="admin-stats">
            <div className="stat-item total-stat">
              <strong>{totalWebsiteImages}</strong>
              <span>Total Website Images</span>
            </div>
            <div className="stat-item">
              <strong>{totalBrandImages}</strong>
              <span>Brand Images</span>
            </div>
            <div className="stat-item">
              <strong>{galleryImages.length}</strong>
              <span>Gallery Photos</span>
            </div>
          </div>

          <button 
            className="reset-btn" 
            onClick={() => {
              if(window.confirm('This will delete all your manual uploads and restore the original website images. Proceed?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            Reset All Data to Default
          </button>
          
          <h3 style={{marginTop: '40px', marginBottom: '15px'}}>Brand Tab Images</h3>
          <p style={{fontSize: '0.8rem', opacity: 0.6, marginBottom: '15px'}}>Click a brand to see all its images</p>
          {collections.map(col => (
            <div 
              key={col.id} 
              className={`brand-overview-section ${expandedBrand === col.id ? 'expanded' : ''}`}
              onClick={() => setExpandedBrand(expandedBrand === col.id ? null : col.id)}
            >
              <div className="brand-header-row">
                <h4 style={{fontSize: '0.9rem', color: 'var(--accent-gold)'}}>{col.tab}</h4>
                <span className="expand-icon">{expandedBrand === col.id ? '−' : '+'}</span>
              </div>
              
              <div className="brand-images-mini-grid">
                {/* Show Main Image first */}
                <div className="mini-thumb-wrapper main-thumb-border">
                  <img src={col.image} alt="Main" className="mini-thumb" />
                  <span className="thumb-label">Main</span>
                </div>

                {/* Then show Extra Images */}
                {col.extraImages.map((img, idx) => (
                  <div key={idx} className="mini-thumb-wrapper">
                    <img src={img} alt="" className="mini-thumb" />
                    {expandedBrand === col.id && (
                      <button 
                        className="mini-delete-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImageFromCollection(col.id, img);
                        }}
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}
                {col.extraImages.length === 0 && <p style={{fontSize: '0.7rem', opacity: 0.4, paddingLeft: '10px'}}>No extra images added yet</p>}
              </div>
            </div>
          ))}

          <h3 style={{marginTop: '40px', marginBottom: '15px'}}>Design Gallery ({galleryImages.length})</h3>
          <div className="brand-images-mini-grid" style={{maxHeight: 'none'}}>
            {galleryImages.map((img) => (
              <div key={img.id} className="mini-thumb-wrapper" style={{width: '70px', height: '70px'}}>
                <img src={img.src} alt="" className="mini-thumb" />
                <button 
                  className="mini-delete-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeGalleryImage(img.id);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
