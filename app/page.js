import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Assignment</Link>
      </p>
      <p>
        <Link href="/week-3">Week 3</Link>
      </p>
    </main>
  );
}
