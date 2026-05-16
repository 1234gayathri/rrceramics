import { useProducts } from '../context/ProductContext';
import './Gallery.css';

export default function Gallery() {
  const { galleryImages } = useProducts();

  return (
    <section className="gallery section" id="gallery">
      <div className="section-header">
        <span className="section-tag">Our Portfolio</span>
        <h2 className="section-heading">Design <span className="gold">Gallery</span></h2>
        <p className="section-sub">A glimpse into the spaces we have helped transform</p>
      </div>

      <div className="gallery__grid">
        {galleryImages.map((img) => (
          <div key={img.id} className={`gallery__item${img.span ? ` gallery__item--${img.span}` : ''}`}>
            <img src={img.src} alt={img.alt} className="gallery__img" />
            <div className="gallery__hover">
              <span className="gallery__hover-icon">
                <svg width="24" height="24" fill="none" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
