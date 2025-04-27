import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="loader"></div>
      <p className="mt-4 text-gray-600">Finding the best spots...</p>
    </div>
  );
};

export default LoadingState;