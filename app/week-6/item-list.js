'use client';
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  let sortedItems = [...itemsData];
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div className="mb-4">
  <span className="mr-2 font-semibold">Sort by:</span>
  <button
    onClick={() => setSortBy('name')}
    className={`px-4 py-2 rounded font-bold mr-2 ${sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
  >
    Name
  </button>
  <button
    onClick={() => setSortBy('category')}
    className={`px-4 py-2 rounded font-bold ${sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
  >
    Category
  </button>

<ul className="max-w-md mt-4">
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  </div>
);
}