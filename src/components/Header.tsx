import React from 'react';
import { Compass } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Compass className="w-6 h-6 mr-2 text-black" />
        <h1 className="text-xl font-medium">Spots</h1>
      </div>
      <div className="w-full max-w-2xl mx-auto px-4 pb-24 pt-12 text-center">
        <h2 className="text-5xl font-semibold mb-4 tracking-tight">
          Discover the Best Places
        </h2>
        <p className="text-xl text-gray-600">
          Find the top spots to visit in any city around the world
        </p>
      </div>
    </header>
  );
};

export default Header;