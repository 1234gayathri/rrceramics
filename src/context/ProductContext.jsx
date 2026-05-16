import React, { createContext, useState, useContext, useEffect } from 'react';

// Import local assets for initial state
import upvcMain from '../assets/upvc-1.jpeg';
import upvcSub1 from '../assets/upvc-2.jpg';
import upvcSub2 from '../assets/upvc-3.png';
import upvcSub3 from '../assets/upvc-4.png';
import kalingaMain from '../assets/kalinga-4.png';
import kalingaSub1 from '../assets/kalinga-1.png';
import spectaMain from '../assets/specta-7.png';
import spectaSub1 from '../assets/specta-2.png';
import tilesMain from '../assets/tiles-1.jpg';
import tilesSub1 from '../assets/tiles-2.png';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const initialProducts = [
  {
    id: 1,
    title: 'Ceramic & Vitrified Tiles',
    brands: 'Nitco · Cera',
    desc: 'World-class ceramic and vitrified tiles featuring innovative patterns, superior glaze finish, and unmatched durability for every space.',
    img: 'https://images.pexels.com/photos/6568682/pexels-photo-6568682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Most Popular',
    path: '/product/nitco-cera',
  },
  {
    id: 2,
    title: 'Engineered Stone Surfaces',
    brands: 'KalingaStone · Specta',
    desc: 'Premium terrazzo, marble, and quartz surfaces that bring natural beauty and luxurious texture to countertops, floors, and walls.',
    img: 'https://images.pexels.com/photos/36327398/pexels-photo-36327398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Premium',
    path: '/product/kalingastone',
  },
  {
    id: 3,
    title: 'uPVC Windows',
    brands: 'Energy Efficient · Modern',
    desc: 'High-quality uPVC windows designed for durability, energy efficiency, sound insulation, and sleek modern aesthetics.',
    img: 'https://images.pexels.com/photos/2972114/pexels-photo-2972114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'New',
    path: '/product/upvc-windows',
  },
  {
    id: 4,
    title: 'Bathroom Tiles',
    brands: 'Nitco · Cera · Imported',
    desc: 'Transform your bathroom into a spa-like retreat with our curated collection of wall and floor tiles with anti-slip finishes.',
    img: 'https://images.pexels.com/photos/6580405/pexels-photo-6580405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: '',
    path: '/product/nitco-cera',
  },
  {
    id: 5,
    title: 'Marble & Quartz',
    brands: 'KalingaStone · Italian',
    desc: 'Natural and engineered marble and quartz slabs for countertops, flooring, and feature walls with exclusive veining patterns.',
    img: 'https://images.pexels.com/photos/5623223/pexels-photo-5623223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Exclusive',
    path: '/product/specta',
  },
  {
    id: 6,
    title: 'Floor & Wall Collections',
    brands: 'Nitco · Imported',
    desc: 'A vast collection of floor and wall tiles in every style — from classic to contemporary — to suit any architectural vision.',
    img: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: '',
    path: '/product/nitco-cera',
  },
];

const initialGallery = [
  { id: 1, src: 'https://images.pexels.com/photos/4154987/pexels-photo-4154987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxury bathroom tiles', span: 'tall' },
  { id: 2, src: 'https://images.pexels.com/photos/6568682/pexels-photo-6568682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Premium tile samples', span: '' },
  { id: 3, src: 'https://images.pexels.com/photos/6394613/pexels-photo-6394613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern ceramic tile design', span: '' },
  { id: 4, src: 'https://images.pexels.com/photos/6580405/pexels-photo-6580405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Green marble shower tiles', span: 'tall' },
  { id: 5, src: 'https://images.pexels.com/photos/36327398/pexels-photo-36327398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Black marble surface', span: 'wide' },
  { id: 6, src: 'https://images.pexels.com/photos/4705933/pexels-photo-4705933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'White marble texture', span: '' },
  { id: 7, src: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tile collection flat lay', span: '' },
  { id: 8, src: 'https://images.pexels.com/photos/6934233/pexels-photo-6934233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Modern mosaic bathroom', span: '' },
];

const initialCollections = [
  {
    id: 'nitco-cera',
    tab: 'Nitco & Cera Tiles',
    title: 'Exquisite Ceramic & Vitrified Tiles',
    subtitle: 'Premium Tile Collection',
    desc: 'Discover our extensive stock of premium Nitco and Cera tiles. From natural textures to contemporary designs and heavy-duty vitrified floors, our collections offer unmatched elegance and durability for every space.',
    image: tilesMain,
    extraImages: [tilesSub1],
    path: '/product/nitco-cera'
  },
  {
    id: 'kalingastone',
    tab: 'KalingaStone',
    title: 'Engineered Marble & Quartz Mastery',
    subtitle: 'KalingaStone Surfaces',
    desc: 'Redefine luxury with KalingaStone engineered surfaces. Offering the majestic beauty of natural stone combined with superior durability and stain resistance for flawless residential and commercial interiors.',
    image: kalingaMain,
    extraImages: [kalingaSub1],
    path: '/product/kalingastone'
  },
  {
    id: 'specta',
    tab: 'Specta Surfaces',
    title: 'Terrazzo, Marble & Quartz',
    subtitle: 'Specta Collection',
    desc: 'Elevate your interiors with Specta\'s exquisite range of Terrazzo, Marble, and Quartz. Featuring vibrant patterns, non-porous finishes, and striking aesthetic versatility perfectly designed for modern architectural needs.',
    image: spectaMain,
    extraImages: [spectaSub1],
    path: '/product/specta'
  },
  {
    id: 'upvc-windows',
    tab: 'uPVC Windows',
    title: 'Premium uPVC Window & Door Systems',
    subtitle: 'Architectural Excellence',
    desc: 'Discover the perfect fusion of aesthetics and performance with our bespoke uPVC solutions. Designed for extreme durability and thermal efficiency, our multi-chambered window profiles and sliding systems provide superior sound insulation and modern style.',
    image: upvcMain,
    extraImages: [upvcSub1, upvcSub2, upvcSub3],
    path: '/product/upvc-windows'
  }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('rr_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [galleryImages, setGalleryImages] = useState(() => {
    const saved = localStorage.getItem('rr_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [collections, setCollections] = useState(() => {
    const saved = localStorage.getItem('rr_collections');
    return saved ? JSON.parse(saved) : initialCollections;
  });

  useEffect(() => {
    localStorage.setItem('rr_products', JSON.stringify(products));
    localStorage.setItem('rr_gallery', JSON.stringify(galleryImages));
    localStorage.setItem('rr_collections', JSON.stringify(collections));
  }, [products, galleryImages, collections]);

  const addProduct = (p) => setProducts(prev => [...prev, { ...p, id: Date.now() }]);
  const removeProduct = (id) => setProducts(prev => prev.filter(p => p.id !== id));

  const addGalleryImage = (img) => setGalleryImages(prev => [{ ...img, id: Date.now() }, ...prev]);
  const removeGalleryImage = (id) => setGalleryImages(prev => prev.filter(img => img.id !== id));

  const addImageToCollection = (brandId, imageUrl) => {
    setCollections(prev => prev.map(col => {
      if (col.id === brandId) {
        return { ...col, extraImages: [imageUrl, ...col.extraImages].slice(0, 10) };
      }
      return col;
    }));
  };

  const removeImageFromCollection = (brandId, imageUrl) => {
    setCollections(prev => prev.map(col => {
      if (col.id === brandId) {
        return { ...col, extraImages: col.extraImages.filter(img => img !== imageUrl) };
      }
      return col;
    }));
  };

  return (
    <ProductContext.Provider value={{ 
      products, addProduct, removeProduct, 
      galleryImages, addGalleryImage, removeGalleryImage,
      collections, addImageToCollection, removeImageFromCollection
    }}>
      {children}
    </ProductContext.Provider>
  );
};
