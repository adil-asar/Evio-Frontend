import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-20 h-20 border-8 mb-3 border-dark border-dashed rounded-full animate-spin"></div>
        {/* Text */}
        <p className="mt-3 text-2xl font-syne  text-gray-800 font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
