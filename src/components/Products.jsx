import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import './Products.css';

export default function Products() {
  const { products } = useProducts();

  return (
    <section className="products section" id="products">
      <div className="section-header">
        <span className="section-tag">Our Collections</span>
        <h2 className="section-heading">Premium <span className="gold">Products</span></h2>
        <p className="section-sub">Handpicked collections from the world's finest tile and surface brands</p>
      </div>

      <div className="products__grid">
        {products.map((p) => (
          <div key={p.id || p.title} className="product-card">
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

