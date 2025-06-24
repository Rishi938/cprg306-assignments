export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white p-4 rounded-lg mb-3 shadow-md">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
    </li>
  );
}
