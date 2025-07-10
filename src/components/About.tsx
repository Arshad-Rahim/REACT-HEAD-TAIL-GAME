import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-4xl mx-auto pt-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          About Head & Tail
        </h1>
        <p className="text-xl text-white/90 mb-12">
          Learn more about our amazing app and its features.
        </p>
        <Link to="/" className="text-white underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
