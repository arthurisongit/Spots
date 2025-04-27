import React from 'react';
import { Compass } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-center">
        <Compass className="w-8 h-8 mr-2" />
        <h1 className="text-3xl font-bold">Spots</h1>
      </div>
      <div className="w-full max-w-3xl mx-auto px-4 pb-12 pt-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Discover the Best Places</h2>
        <p className="text-xl opacity-90">
          Find the top 10 spots to visit in any city around the world
        </p>
      </div>
    </header>
  );
};

export default Header;