import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card relative border p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`original-content ${isHovered ? 'hidden' : ''}`}>
        <img src={product.image} alt={product.name} className="w-full h-auto" />
        <h3 className="text-center mt-2">{product.name}</h3>
      </div>

      {isHovered && (
        <div className="expanded-content absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 mb-4" />
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default function ProductList() {
  const products = [
    { id: 1, name: 'Produit A', image: '/images/product1.jpg', description: 'Détails du produit A.' },
    { id: 2, name: 'Produit B', image: '/images/product2.jpg', description: 'Détails du produit B.' },
    { id: 3, name: 'Produit C', image: '/images/product3.jpg', description: 'Détails du produit C.' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
