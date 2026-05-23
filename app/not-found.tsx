import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-urvar-dark flex-1 flex items-center justify-center py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-urvar-green text-6xl font-bold mb-4">404</p>
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-green-200 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-urvar-green hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
