import './Hero.css';

export default function Hero() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
        {[...Array(25)].map((_, i) => (
          <span 
            key={i} 
            className="particle" 
            style={{ 
              '--i': i, 
              '--size': `${Math.random() * 4 + 1}px`,
              '--left': `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 5}s`
            }} 
          />
        ))}

      <div className="hero__content">
        <div className="hero__logo-emblem">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'var(--accent-gold)', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>RR Ceramics</h2>
        </div>
        <h1 className="hero__heading">Tiles That Define <span className="hero__accent">Luxury</span></h1>
        <p className="hero__sub">Elevate Your Space with Premium Surfaces</p>

        <div className="hero__divider">
          <span /><span className="hero__diamond" /><span />
        </div>

        <div className="hero__cta">
          <button className="btn btn-gold" onClick={() => handleNav('products')}>Explore Products</button>
          <button className="btn btn-outline" onClick={() => handleNav('contact')}>Contact Us</button>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}
