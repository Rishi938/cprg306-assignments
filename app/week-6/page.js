import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
