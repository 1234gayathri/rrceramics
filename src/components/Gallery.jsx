import './Gallery.css';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/4154987/pexels-photo-4154987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxury bathroom tiles', span: 'tall' },
  { src: 'https://images.pexels.com/photos/6568682/pexels-photo-6568682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Premium tile samples', span: '' },
  { src: 'https://images.pexels.com/photos/6394613/pexels-photo-6394613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern ceramic tile design', span: '' },
  { src: 'https://images.pexels.com/photos/6580405/pexels-photo-6580405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Green marble shower tiles', span: 'tall' },
  { src: 'https://images.pexels.com/photos/36327398/pexels-photo-36327398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Black marble surface', span: 'wide' },
  { src: 'https://images.pexels.com/photos/4705933/pexels-photo-4705933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'White marble texture', span: '' },
  { src: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tile collection flat lay', span: '' },
  { src: 'https://images.pexels.com/photos/6934233/pexels-photo-6934233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern mosaic bathroom', span: '' },
];

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-header">
        <span className="section-tag">Our Portfolio</span>
        <h2 className="section-heading">Design <span className="gold">Gallery</span></h2>
        <p className="section-sub">A glimpse into the spaces we have helped transform</p>
      </div>

      <div className="gallery__grid">
        {galleryImages.map((img, i) => (
          <div key={i} className={`gallery__item${img.span ? ` gallery__item--${img.span}` : ''}`}>
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
