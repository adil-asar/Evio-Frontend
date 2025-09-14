import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="containerize py-32">
      <div className="text-center heading-lg">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">🚀 Coming Soon</h1>

        {/* Subtitle */}
        <p className="paragraph-lg mb-8">
          We’re working hard to bring you something amazing. Stay tuned — it won’t take long!
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-medium shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
