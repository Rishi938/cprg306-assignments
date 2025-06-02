import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-[#0f172a] min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-left">Shopping List</h1>
      
        <ItemList />
      
    </main>
  );
}