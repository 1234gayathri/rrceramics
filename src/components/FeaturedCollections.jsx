import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import './FeaturedCollections.css';

export default function FeaturedCollections() {
  const { collections } = useProducts();
  const [active, setActive] = useState(collections[0]);

  // Keep active tab in sync if collections change
  useEffect(() => {
    const current = collections.find(c => c.id === active.id);
    if (current) setActive(current);
  }, [collections]);

  return (
    <section className="featured-col section" id="featured-collections">
      <div className="section-header">
        <span className="section-tag">Signature Lines</span>
        <h2 className="section-heading">Curated <span className="gold">Elegance</span></h2>
        <p className="section-sub">Explore our most requested modular solutions and premium surfaces.</p>
      </div>

      <div className="fc-container">
        <div className="fc-tabs">
          {collections.map((ci) => (
            <button
              key={ci.id}
              className={`fc-tab ${active.id === ci.id ? 'active' : ''}`}
              onClick={() => setActive(ci)}
            >
              {ci.tab}
            </button>
          ))}
        </div>

        <div className="fc-content">
          <div className="fc-image-wrapper">
            <div className="fc-main-image-container">
              <img src={active.image} alt={active.title} className="fc-main-image fade-in-scale" key={active.image} />
              <div className="fc-image-overlay"></div>
            </div>
            {active.extraImages && (
              <div className="fc-extra-images">
                {active.extraImages.map((img, i) => (
                  <div className="fc-sub-image-container" key={img + i}>
                    <img src={img} alt="Detail view" className="fc-sub-image fade-in-scale" style={{ animationDelay: `${(i + 1) * 0.1}s` }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="fc-text-wrapper fade-in-up" key={active.title}>
            <div className="fc-subtitle"><Sparkles className="fc-icon gold" size={16} /> {active.subtitle}</div>
            <h3 className="fc-title">{active.title}</h3>
            <p className="fc-desc">{active.desc}</p>

            <div className="fc-feature-list">
              <div className="fc-feature-item">
                <span className="fc-feature-check">✓</span>
                <span className="fc-feature-text">Premium Grade Materials</span>
              </div>
              <div className="fc-feature-item">
                <span className="fc-feature-check">✓</span>
                <span className="fc-feature-text">Customizable Configurations</span>
              </div>
              <div className="fc-feature-item">
                <span className="fc-feature-check">✓</span>
                <span className="fc-feature-text">Expert Installation Support</span>
              </div>
            </div>

            {active.path ? (
              <Link to={active.path} className="btn btn-gold fc-btn">
                View Full Details <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            ) : (
              <button className="btn btn-gold fc-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                View Full Catalog <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
