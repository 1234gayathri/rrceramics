import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FeaturedCollections.css';

// Import uPVC Assets
import upvcMain from '../assets/upvc-1.jpeg';
import upvcSub1 from '../assets/upvc-2.jpg';
import upvcSub2 from '../assets/upvc-3.png';
import upvcSub3 from '../assets/upvc-4.png';

// Import Kalinga Assets
import kalingaMain from '../assets/kalinga-4.png';
import kalingaSub1 from '../assets/kalinga-1.png';
import kalingaSub2 from '../assets/kalinga-2.jpg';
import kalingaSub3 from '../assets/kalinga-3.jpg';
import kalingaSub4 from '../assets/kalinga-5.png';

// Import Specta Assets
import spectaMain from '../assets/specta-7.png';
import spectaSub1 from '../assets/specta-2.png';
import spectaSub2 from '../assets/specta-3.jpg';
import spectaSub3 from '../assets/specta-4.png';
import spectaSub4 from '../assets/specta-5.png';



// Import Tiles (Nitco & Cera) Assets
import tilesMain from '../assets/tiles-1.jpg';
import tilesSub1 from '../assets/tiles-2.png';
import tilesSub2 from '../assets/tiles-3.png';
import tilesSub3 from '../assets/tiles-4.png';
import tilesSub4 from '../assets/nitco-magnified.png';

const collections = [
  {
    id: 'nitco-cera',
    tab: 'Nitco & Cera Tiles',
    title: 'Exquisite Ceramic & Vitrified Tiles',
    subtitle: 'Premium Tile Collection',
    desc: 'Discover our extensive stock of premium Nitco and Cera tiles. From natural textures to contemporary designs and heavy-duty vitrified floors, our collections offer unmatched elegance and durability for every space.',
    image: tilesMain,
    extraImages: [
      tilesSub1,
      tilesSub2,
      tilesSub3,
      tilesSub4
    ],
    path: '/product/nitco-cera'
  },
  {
    id: 'kalingastone',
    tab: 'KalingaStone',
    title: 'Engineered Marble & Quartz Mastery',
    subtitle: 'KalingaStone Surfaces',
    desc: 'Redefine luxury with KalingaStone engineered surfaces. Offering the majestic beauty of natural stone combined with superior durability and stain resistance for flawless residential and commercial interiors.',
    image: kalingaMain,
    extraImages: [
      kalingaSub1,
      kalingaSub2,
      kalingaSub3,
      kalingaSub4
    ],
    path: '/product/kalingastone'
  },
  {
    id: 'specta',
    tab: 'Specta Surfaces',
    title: 'Terrazzo, Marble & Quartz',
    subtitle: 'Specta Collection',
    desc: 'Elevate your interiors with Specta\'s exquisite range of Terrazzo, Marble, and Quartz. Featuring vibrant patterns, non-porous finishes, and striking aesthetic versatility perfectly designed for modern architectural needs.',
    image: spectaMain,
    extraImages: [
      spectaSub1,
      spectaSub2,
      spectaSub3,
      spectaSub4
    ],
    path: '/product/specta'
  },
  {
    id: 'upvc-windows',
    tab: 'uPVC Windows',
    title: 'Premium uPVC Window & Door Systems',
    subtitle: 'Architectural Excellence',
    desc: 'Discover the perfect fusion of aesthetics and performance with our bespoke uPVC solutions. Designed for extreme durability and thermal efficiency, our multi-chambered window profiles and sliding systems provide superior sound insulation and modern style.',
    image: upvcMain,
    extraImages: [
      upvcSub1,
      upvcSub2,
      upvcSub3
    ],
    path: '/product/upvc-windows'
  }
];

export default function FeaturedCollections() {
  const [active, setActive] = useState(collections[0]);

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
