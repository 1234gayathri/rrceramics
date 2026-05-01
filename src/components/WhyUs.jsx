import './WhyUs.css';
import { Award, Shield, Layers, Gem } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Every product is sourced from world-class manufacturers and tested to meet the highest standards of quality and finish.',
  },
  {
    icon: Award,
    title: 'Trusted Brands',
    desc: 'We partner with industry leaders like Nitco, Cera, KalingaStone, and Specta — names synonymous with excellence.',
  },
  {
    icon: Layers,
    title: 'Modern Designs',
    desc: 'Stay ahead with our ever-evolving catalogue of contemporary styles, patterns, and textures for every aesthetic.',
  },
  {
    icon: Shield,
    title: 'Durable Materials',
    desc: 'Built to last. Our tiles, stones, and windows are engineered for long-term performance and enduring beauty.',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus section" id="whyus">
      <div className="section-header">
        <span className="section-tag">Why RR Ceramics</span>
        <h2 className="section-heading">The <span className="gold">Difference</span> We Make</h2>
        <p className="section-sub">Four pillars that set us apart in the world of premium surfaces</p>
      </div>

      <div className="whyus__grid">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="whyus__card" style={{ '--delay': `${i * 0.12}s` }}>
              <div className="whyus__icon-ring">
                <Icon size={28} color="#D4AF37" />
              </div>
              <h3 className="whyus__title">{f.title}</h3>
              <p className="whyus__desc">{f.desc}</p>
              <div className="whyus__line" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
