"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState(""); 
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce"); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
  <form onSubmit={handleSubmit} className="bg-[#1c2331] p-4 rounded shadow w-80 mx-auto mt-10 space-y-3">

    {/* Item Name */}
    <input
      type="text"
      placeholder="Item name"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full border border-gray-300 px-2 py-1 rounded text-black"
    />

    {/* Quantity and Category Side-by-Side */}
    <div className="flex space-x-2">
      {/* Quantity */}
      <div className="flex items-center justify-between w-1/2 border border-gray-300 px-2 py-1 rounded">
        <span className="text-black">{quantity}</span>
        <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-blue-500 text-white px-2 rounded">-</button>
        <button type="button" onClick={() => setQuantity(q => q + 1)} className="bg-blue-500 text-white px-2 rounded">+</button>
      </div>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-1/2 border border-gray-300 px-2 py-1 rounded text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white text-xl py-1 rounded hover:bg-blue-600"
    >
      +
    </button>
  </form>
);
}
