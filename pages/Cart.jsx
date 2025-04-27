import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            className="w-16 border px-2"
          />
          <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
