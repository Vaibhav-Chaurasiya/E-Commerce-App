import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src="{https://placehold.co/600x400}" alt="{product.name}" className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
