import React from 'react';
import { Search } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <Search className="w-12 h-12 text-cyan-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to explore?</h2>
      <p className="text-gray-600 max-w-md mx-auto">
        Enter a city name above to discover the top 10 must-visit spots with ratings and directions.
      </p>
    </div>
  );
};

export default EmptyState;