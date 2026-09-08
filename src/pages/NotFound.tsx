import { Construction } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <div
      id="page-not-found"
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center"
    >
      <div
        id="not-found-card"
        className="bg-(--color-surface) text-(--color-text) shadow-lg rounded-xl p-10 max-w-md w-full border border-yellow-300"
      >
        <div
          id="not-found-icon"
          className="flex justify-center mb-6 text-yellow-500"
        >
          <Construction size={64} />
        </div>
        <h1
          id="not-found-title"
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          Feature in Progress
        </h1>
        <p id="not-found-description" className="text-gray-600 text-lg mb-6">
          This page or feature is currently under development. Please check back
          later.
        </p>
        <button
          id="not-found-back"
          onClick={() => window.history.back()}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
