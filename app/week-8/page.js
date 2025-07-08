'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

function cleanItemName(name) {
  return name
    .replace(/[^\w\s]/gi, '') 
    .split(',')[0]           
    .trim()
    .toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState(itemsData); 
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); 
  }

  function handleItemSelect(itemName) {
    const cleaned = cleanItemName(itemName);
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-4 bg-[#0f172a] min-h-screen text-white flex flex-col lg:flex-row gap-8">
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="mt-6">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>

      
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
