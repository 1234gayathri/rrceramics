import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    title: 'Ceramic & Vitrified Tiles',
    brands: 'Nitco · Cera',
    desc: 'World-class ceramic and vitrified tiles featuring innovative patterns, superior glaze finish, and unmatched durability for every space.',
    img: 'https://images.pexels.com/photos/6568682/pexels-photo-6568682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Most Popular',
    path: '/product/nitco-cera',
  },
  {
    title: 'Engineered Stone Surfaces',
    brands: 'KalingaStone · Specta',
    desc: 'Premium terrazzo, marble, and quartz surfaces that bring natural beauty and luxurious texture to countertops, floors, and walls.',
    img: 'https://images.pexels.com/photos/36327398/pexels-photo-36327398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Premium',
    path: '/product/kalingastone',
  },
  {
    title: 'uPVC Windows',
    brands: 'Energy Efficient · Modern',
    desc: 'High-quality uPVC windows designed for durability, energy efficiency, sound insulation, and sleek modern aesthetics.',
    img: 'https://images.pexels.com/photos/2972114/pexels-photo-2972114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'New',
    path: '/product/upvc-windows',
  },
  {
    title: 'Bathroom Tiles',
    brands: 'Nitco · Cera · Imported',
    desc: 'Transform your bathroom into a spa-like retreat with our curated collection of wall and floor tiles with anti-slip finishes.',
    img: 'https://images.pexels.com/photos/6580405/pexels-photo-6580405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: '',
    path: '/product/nitco-cera',
  },
  {
    title: 'Marble & Quartz',
    brands: 'KalingaStone · Italian',
    desc: 'Natural and engineered marble and quartz slabs for countertops, flooring, and feature walls with exclusive veining patterns.',
    img: 'https://images.pexels.com/photos/5623223/pexels-photo-5623223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Exclusive',
    path: '/product/specta',
  },
  {
    title: 'Floor & Wall Collections',
    brands: 'Nitco · Imported',
    desc: 'A vast collection of floor and wall tiles in every style — from classic to contemporary — to suit any architectural vision.',
    img: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: '',
    path: '/product/nitco-cera',
  },
];

export default function Products() {
  return (
    <section className="products section" id="products">
      <div className="section-header">
        <span className="section-tag">Our Collections</span>
        <h2 className="section-heading">Premium <span className="gold">Products</span></h2>
        <p className="section-sub">Handpicked collections from the world's finest tile and surface brands</p>
      </div>

      <div className="products__grid">
        {products.map((p) => (
          <div key={p.title} className="product-card">
            <div className="product-card__img-wrap">
              <img src={p.img} alt={p.title} className="product-card__img" />
              {p.tag && <span className="product-card__tag">{p.tag}</span>}
              <div className="product-card__overlay" />
            </div>
            <div className="product-card__body">
              <p className="product-card__brands">{p.brands}</p>
              <h3 className="product-card__title">{p.title}</h3>
              <p className="product-card__desc">{p.desc}</p>
              <Link to={p.path} className="product-card__btn">View Collection</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

