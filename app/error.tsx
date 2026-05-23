"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-urvar-dark flex-1 flex items-center justify-center py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-urvar-green text-6xl font-bold mb-4">!</p>
          <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-green-200 mb-10">
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="inline-block bg-urvar-green hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    </div>
  );
}
