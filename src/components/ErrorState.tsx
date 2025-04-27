import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  cityName: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ cityName }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
      <p className="text-gray-600 max-w-md mx-auto">
        We couldn't find any spots for "{cityName}". 
        Please try another city or check your spelling.
      </p>
      <p className="text-gray-500 mt-4 text-sm">
        Try searching for "Paris", "Tokyo", or "New York" for demo content.
      </p>
    </div>
  );
};

export default ErrorState;