'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center mt-0.5">
    <div className="bg-white p-2 rounded shadow flex space-x-2 items-center">
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center rounded px-2 py-1 text-black"
      />
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`px-4 py-0.1 rounded ${
          quantity === 1 ? 'bg-gray-500' : 'bg-blue-400 text-white'
        }`}
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`px-4 py-0.1 rounded ${
          quantity === 20 ? 'bg-gray-500' : 'bg-blue-400 text-white'
        }`}
      >
        +
      </button>
    </div>
  </div>
)};