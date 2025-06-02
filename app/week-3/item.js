export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white rounded-lg px-4 py-3 shadow-md">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
    </li>
  );
}
