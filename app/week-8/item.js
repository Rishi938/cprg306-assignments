export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="bg-[#1e293b] px-2 py-2 w-[300px] cursor-pointer hover:bg-slate-700"
    >
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-md">Buy {quantity} in {category}</p>
    </div>
  );
}
