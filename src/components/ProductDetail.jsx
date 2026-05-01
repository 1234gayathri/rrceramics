import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './ProductDetail.css';

import tilesMain from '../assets/tiles-1.jpg';
import tilesSub1 from '../assets/tiles-2.png';
import tilesSub2 from '../assets/nitco-magnified.png';

import kalingaMain from '../assets/kalinga-4.png';
import kalingaSub1 from '../assets/kalinga-1.png';
import kalingaSub2 from '../assets/kalinga-2.jpg';

import spectaMain from '../assets/specta-1.png';
import spectaSub1 from '../assets/specta-2.png';
import spectaSub2 from '../assets/specta-3.jpg';

import upvcMain from '../assets/upvc-1.jpeg';
import upvcSub1 from '../assets/upvc-2.jpg';
import upvcSub2 from '../assets/upvc-3.png';

const productData = {
  'nitco-cera': {
    title: 'Nitco & Cera Premium Tiles',
    subtitle: 'Exquisite Tile Collection',
    desc: 'Discover our extensive stock of premium Nitco and Cera tiles. From natural textures to contemporary designs and heavy-duty vitrified floors, our collections offer unmatched elegance and durability for every space.',
    fullDesc: 'Transform your floors and walls with the finest ceramic and vitrified tiles from two of India\'s most trusted brands. Nitco tiles bring nature-inspired elegance with high-definition digital printing, while Cera offers a vast range of anti-skid, scratch-resistant, and stain-proof surfaces. Whether it\'s a luxurious living room, a modern bathroom, or a high-traffic commercial space, our curated selection ensures the perfect tile for every need.',
    features: ['Anti-Skid & Scratch Resistant', 'High-Definition Digital Printing', 'Heavy-Duty Vitrified Options', 'Wide Range of Sizes & Finishes'],
    images: [tilesMain, tilesSub1, tilesSub2]
  },
  'kalingastone': {
    title: 'KalingaStone Engineered Surfaces',
    subtitle: 'Premium Stone Collection',
    desc: 'Redefine luxury with KalingaStone engineered surfaces. Offering the majestic beauty of natural stone combined with superior durability and stain resistance for flawless residential and commercial interiors.',
    fullDesc: 'KalingaStone is India\'s leading engineered marble and quartz surface brand, crafted with cutting-edge Italian technology. Each slab replicates the grandeur of natural stone while delivering exceptional strength, zero water absorption, and UV stability. Ideal for kitchen countertops, bathroom vanities, flooring, and wall cladding, KalingaStone offers over 100 premium designs ranging from classic Statuario to exotic book-matched patterns.',
    features: ['Zero Water Absorption', 'Stain & Scratch Resistant', 'UV Stable & Color-Fast', '100+ Premium Designs Available'],
    images: [kalingaMain, kalingaSub1, kalingaSub2]
  },
  'specta': {
    title: 'Specta Terrazzo, Marble & Quartz',
    subtitle: 'Specta Surface Collection',
    desc: 'Elevate your interiors with Specta\'s exquisite range of Terrazzo, Marble, and Quartz surfaces featuring vibrant patterns and non-porous finishes.',
    fullDesc: 'Specta surfaces bring together the timeless charm of Terrazzo, the elegance of Marble, and the modern performance of Quartz. Each surface is engineered for non-porous, antibacterial performance with stunning visual depth. From vibrant multi-colored terrazzo chips to sleek veined marble finishes, Specta delivers architectural-grade surfaces for countertops, floors, staircases, and feature walls that stand the test of time.',
    features: ['Non-Porous & Antibacterial', 'Terrazzo, Marble & Quartz Options', 'Heat & Impact Resistant', 'Vibrant Patterns & Custom Designs'],
    images: [spectaMain, spectaSub1, spectaSub2]
  },
  'upvc-windows': {
    title: 'Precision uPVC Window Systems',
    subtitle: 'Innovation in Thermal Insulation',
    desc: 'Our uPVC windows are engineered for the ultimate in energy efficiency, sound insulation, and durability. Featuring multi-chambered profiles and high-quality EPDM gaskets, they provide a lifetime of maintenance-free performance.',
    fullDesc: 'Transform your living environment with windows that combine aesthetics with cutting-edge engineering. Our uPVC frames are resistant to moisture, corrosion, and UV rays, ensuring they never rot, warp, or fade. From sliding systems to tilt-and-turn designs, we offer bespoke solutions for every architectural requirement.',
    features: ['Sound Proofing up to 45dB', 'Energy Efficiency (Low U-values)', 'Multi-point Locking Systems', 'Custom Wood-finish Laminates'],
    images: [upvcMain, upvcSub1, upvcSub2]
  }
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="product-detail fade-in">
      <div className="pd-hero">
        <div className="pd-hero__content">
          <Link to="/#products" className="pd-back"><ArrowLeft size={18} /> Back to Products</Link>
          <span className="section-tag">{product.subtitle}</span>
          <h1 className="pd-title">{product.title}</h1>
          <p className="pd-desc">{product.desc}</p>
        </div>
        <div className="pd-hero__img-container">
          <img src={product.images[0]} alt={product.title} className="pd-hero__img" />
        </div>
      </div>

      <div className="pd-details section">
        <div className="pd-grid">
          <div className="pd-info">
            <h2 className="section-heading">Detailed <span className="gold">Specifications</span></h2>
            <p className="pd-long-desc">{product.fullDesc}</p>

            <div className="pd-features">
              {product.features.map((feat, i) => (
                <div className="pd-feature-item" key={i}>
                  <CheckCircle2 className="gold" size={24} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pd-gallery">
            {product.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt="Detail" className="pd-detail-img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
