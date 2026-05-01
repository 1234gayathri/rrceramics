import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import logo from '../assets/header-logo.jpg';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--solid' : ''}`}>
      <div className="navbar__logo" onClick={(e) => handleNav(e, 'home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={logo} alt="RR Ceramics Logo" className="logo-img" style={{ height: '50px', width: '50px', objectFit: 'cover', borderRadius: '50%' }} />
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--accent-gold)', letterSpacing: '1px' }}>RR Ceramics</span>
      </div>

      <div className="navbar__actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="navbar__hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span className={`bar${menuOpen ? ' open' : ''}`} />
          <span className={`bar${menuOpen ? ' open' : ''}`} />
          <span className={`bar${menuOpen ? ' open' : ''}`} />
        </button>
      </div>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {[['home', 'Home'], ['about', 'About'], ['products', 'Products'], ['gallery', 'Gallery'], ['contact', 'Contact']].map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => handleNav(e, id)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
