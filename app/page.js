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
      <p>
        <Link href="/week-4">Week 4</Link>
      </p>
      <p>
        <Link href="/week-5">Week 5</Link>
      </p>
      <p>
        <Link href="/week-6">Week 6</Link>
      </p>

    </main>
  );
}
