import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__inner">
        <div className="about__image-col">
          <div className="about__img-frame">
            <img
              src="https://images.pexels.com/photos/4154987/pexels-photo-4154987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Luxury bathroom with premium tiles"
              className="about__img"
            />
            <div className="about__img-badge">
              <span className="badge-num">15+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className="about__text-col">
          <span className="section-tag">Our Story</span>
          <h2 className="section-heading">Crafted for <span className="gold">Perfection</span></h2>
          <div className="about__gold-bar" />
          <p className="about__para">
            RR Ceramics is a trusted destination for premium tiles and surface solutions, offering a wide range
            of high-quality products to transform residential and commercial spaces. We specialize in delivering
            stylish, durable, and modern designs that combine elegance with functionality.
          </p>
          <p className="about__para">
            Our collection includes top brands like <strong>Nitco</strong> and <strong>Cera</strong>, known for
            their innovative tile designs and superior quality. We also provide premium surfaces from{' '}
            <strong>KalingaStone</strong> and <strong>Specta</strong>, featuring terrazzo, marble, and quartz
            options that add a luxurious finish to any space.
          </p>
          <p className="about__para">
            In addition, we offer high-quality <strong>uPVC windows</strong>, designed for durability, energy
            efficiency, and modern aesthetics.
          </p>
          <p className="about__para">
            At RR Ceramics, we are committed to helping our customers create beautiful and long-lasting spaces
            with products that meet the highest standards of design and performance.
          </p>


        </div>
      </div>
    </section>
  );
}
