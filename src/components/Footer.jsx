import logo from '../assets/header-logo.jpg';
import './Footer.css';

export default function Footer() {
  const year = 2026;

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="RR Ceramics Logo" className="footer-logo-img" style={{ borderRadius: '50%', width: '100px', height: 'auto' }} /> <h3><span className="footer__col-title">RR Ceramics</span></h3>

          </div>
          <p className="footer__tagline">Tiles That Define Luxury</p>
          <p className="footer__about">
            Your trusted destination for premium tiles, engineered stones, and modern uPVC windows.
            Transforming spaces with elegance and durability.
          </p>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {[['home', 'Home'], ['about', 'About Us'], ['products', 'Products'], ['gallery', 'Gallery'], ['contact', 'Contact']].map(([id, label]) => (
              <li key={id}>
                <button onClick={() => handleNav(id)} className="footer__link">{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__col-title">Our Brands</h4>
          <ul className="footer__links">
            {['Nitco', 'Cera', 'KalingaStone', 'Specta', 'uPVC Windows'].map(b => (
              <li key={b}><span className="footer__brand-item">{b}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__col-title">Contact</h4>
          <ul className="footer__links footer__contact-list">
            <li>RR Ceramics Shop,<br />Seethamadhara, Visakhapatnam</li>
            <li>+91 8885766111 , +91 89772 27383</li>
            <li>info.rrceramics@gmail.com</li>
            <li>Mon – Sat: 9 AM – 7 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <p>&copy; {year} RR Ceramics. All rights reserved.</p>
        <p className="footer__crafted">Crafted with precision for luxury living.</p>
      </div>
    </footer>
  );
}
