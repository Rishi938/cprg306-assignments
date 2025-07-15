"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4 bg-slate-900 text-white min-h-screen">
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Login with GitHub
        </button>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div className="flex gap-4">
            <Link href="/week-9/shopping-list">
              <button className="bg-green-600 px-4 py-2 rounded">
                Go to Shopping List
              </button>
            </Link>
            <button
              onClick={firebaseSignOut}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
