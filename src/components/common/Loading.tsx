import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        {/* Text */}
        <p className="mt-3 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
