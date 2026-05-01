import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FeaturedCollections from './components/FeaturedCollections';
import ProductDetail from './components/ProductDetail';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', window.location.pathname);
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
    <Hero />
    <About />
    <Products />
    <FeaturedCollections />
    <WhyUs />
    <Gallery />
    <Contact />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
