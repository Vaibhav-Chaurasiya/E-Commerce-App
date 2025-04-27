import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Product Details - ID: {id}</h1>
      {/* Fetch and show more product info here */}
    </div>
  );
};

export default ProductDetails;