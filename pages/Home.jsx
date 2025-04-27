import React from 'react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: 'Product A', price: 25, image: 'https://source.unsplash.com/random/?Cryptocurrency&1' },
  { id: 2, name: 'Product B', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 40, image: 'https://via.placeholder.com/150' },
];

const Home = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    {sampleProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default Home;
